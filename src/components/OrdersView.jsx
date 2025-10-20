import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const OrdersView = () => {
    const [orders, setOrders] = useState([]);

    // Load from localStorage and listen for updates across tabs
    useEffect(() => {
        const loadOrders = () => {
            const stored = JSON.parse(localStorage.getItem("orders")) || [];
            setOrders(stored);
        };

        loadOrders();
        window.addEventListener("storage", loadOrders);
        return () => window.removeEventListener("storage", loadOrders);
    }, []);

    const grouped = orders.reduce((acc, order) => {
        const key = `${order.orderNumber}-${order.buyerId}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(order);
        return acc;
    }, {});

    return (
        <div className="max-w-5xl mx-auto p-6">
            <Card className="shadow-lg bg-gradient-to-b from-gray-900 via-gray-800 to-black border border-gray-700 text-gray-100">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-teal-400">
                        My Orders
                    </CardTitle>
                    <Separator className="bg-gray-700 mt-2" />
                </CardHeader>
                <CardContent>
                    {Object.keys(grouped).length === 0 ? (
                        <div className="text-center text-gray-400 py-10">
                            <h2 className="text-lg font-semibold">No orders yet 😔</h2>
                        </div>
                    ) : (
                        <div className="overflow-x-auto rounded-lg border border-gray-700">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-800 text-teal-400 border-b border-gray-700">
                                        <th className="text-left py-3 px-4">Order Number</th>
                                        <th className="text-left py-3 px-4">Total Items</th>
                                        <th className="text-left py-3 px-4">Total Price</th>
                                        <th className="text-left py-3 px-4">Date</th>
                                        <th className="text-left py-3 px-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(grouped).map((key) => {
                                        const group = grouped[key];
                                        const order = group[0];
                                        const total = group.reduce((s, o) => s + o.total, 0);
                                        const date = new Date(order.createdAt).toLocaleString();
                                        return (
                                            <tr
                                                key={key}
                                                className="border-b border-gray-700 hover:bg-gray-800/80 transition"
                                            >
                                                <td className="py-3 px-4 font-semibold text-teal-400">
                                                    #{order.orderNumber}
                                                </td>
                                                <td className="py-3 px-4">{order.items.length}</td>
                                                <td className="py-3 px-4 text-gray-200">
                                                    ₱{total.toFixed(2)}
                                                </td>
                                                <td className="py-3 px-4 text-gray-400">{date}</td>
                                                <td className="py-3 px-4">
                                                    <Badge
                                                        className={`${order.status === "Delivered"
                                                                ? "bg-teal-500"
                                                                : "bg-yellow-500"
                                                            } text-white px-3 py-1 rounded-full`}
                                                    >
                                                        {order.status}
                                                    </Badge>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default OrdersView;
