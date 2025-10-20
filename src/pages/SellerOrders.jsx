import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SellerOrders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrderKey, setSelectedOrderKey] = useState(null);

    // Load orders from localStorage
    useEffect(() => {
        const loadOrders = () => {
            const stored = JSON.parse(localStorage.getItem("orders")) || [];
            setOrders(JSON.parse(JSON.stringify(stored))); // deep copy
        };
        loadOrders();
        window.addEventListener("storage", loadOrders);
        return () => window.removeEventListener("storage", loadOrders);
    }, []);

    // Group orders by orderNumber + buyerId
    const groupedOrders = orders.reduce((acc, order) => {
        const key = `${order.orderNumber}-${order.buyerId}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(order);
        return acc;
    }, {});

    const handleOrderClick = (key) => setSelectedOrderKey(key);

    const handleMarkDelivered = (orderNumber, buyerId) => {
        const updatedOrders = orders.map((order) =>
            order.orderNumber === orderNumber && order.buyerId === buyerId
                ? { ...order, status: "Delivered" }
                : order
        );
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    // Detailed view
    if (selectedOrderKey) {
        const selectedOrders = groupedOrders[selectedOrderKey];
        const orderNumber = selectedOrders[0].orderNumber;
        const buyerId = selectedOrders[0].buyerId;
        const totalPrice = selectedOrders.reduce((sum, o) => sum + o.total, 0);
        const date = new Date(selectedOrders[0].createdAt).toLocaleString();

        return (
            <div className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black min-h-screen text-gray-100">
                <Card className="bg-gray-800/80 border border-gray-700 shadow-lg hover:shadow-teal-500/20">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-2xl font-bold text-teal-400">
                                    Order #{orderNumber}
                                </CardTitle>
                                <p className="text-sm text-gray-400">
                                    Guest ID:{" "}
                                    <span className="font-semibold text-gray-100">{buyerId}</span>
                                </p>
                                <p className="text-sm text-gray-400">Date: {date}</p>
                            </div>
                            <button
                                onClick={() => setSelectedOrderKey(null)}
                                className="text-sm text-teal-400 hover:underline"
                            >
                                ← Back to Orders
                            </button>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-700 text-gray-100">
                                        <th className="text-left py-2 px-4">Product Name</th>
                                        <th className="text-left py-2 px-4">Price</th>
                                        <th className="text-left py-2 px-4">Status</th>
                                        <th className="text-left py-2 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedOrders.map((order, idx) =>
                                        order.items.map((item, i) => (
                                            <tr
                                                key={`${idx}-${i}`}
                                                className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                                            >
                                                <td className="py-3 px-4 flex items-center space-x-3">
                                                    {item.image && (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-12 h-12 rounded object-cover"
                                                        />
                                                    )}
                                                    <span className="font-medium text-gray-100">
                                                        {item.name}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 font-semibold text-gray-100">
                                                    ₱{item.price.toFixed(2)}
                                                </td>
                                                <td className="py-3 px-4">
                                                    <Badge
                                                        className={`${order.status === "Delivered"
                                                                ? "bg-green-600"
                                                                : "bg-yellow-500"
                                                            } text-white`}
                                                    >
                                                        {order.status}
                                                    </Badge>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <Button
                                                        onClick={() =>
                                                            handleMarkDelivered(order.orderNumber, order.buyerId)
                                                        }
                                                        disabled={order.status === "Delivered"}
                                                        className={`${order.status === "Delivered"
                                                                ? "bg-gray-500 cursor-not-allowed"
                                                                : "bg-teal-500 hover:bg-teal-600"
                                                            } text-white`}
                                                    >
                                                        {order.status === "Delivered"
                                                            ? "Delivered"
                                                            : "Mark as Delivered"}
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <Separator className="my-4 bg-gray-700" />
                        <div className="text-right font-semibold text-lg text-gray-100">
                            Total:{" "}
                            <span className="text-teal-400">
                                ₱{totalPrice.toFixed(2)}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Summary view
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black min-h-screen text-gray-100">
            <Card className="bg-gray-800/80 border border-gray-700 shadow-lg hover:shadow-teal-500/20">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-teal-400">
                        Seller Order Transactions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {Object.keys(groupedOrders).length === 0 ? (
                        <div className="text-center text-gray-400 py-10">
                            <h2 className="text-lg font-semibold">No orders yet 😔</h2>
                            <p>Orders will appear here once customers place them.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-700 text-gray-100">
                                        <th className="text-left py-2 px-4">Order Number</th>
                                        <th className="text-left py-2 px-4">Items</th>
                                        <th className="text-left py-2 px-4">Total</th>
                                        <th className="text-left py-2 px-4">Date</th>
                                        <th className="text-left py-2 px-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(groupedOrders).map((key) => {
                                        const ordersGroup = groupedOrders[key];
                                        const order = ordersGroup[0];
                                        const totalPrice = ordersGroup.reduce((s, o) => s + o.total, 0);
                                        const date = new Date(order.createdAt).toLocaleString();

                                        return (
                                            <tr
                                                key={key}
                                                onClick={() => handleOrderClick(key)}
                                                className="border-b border-gray-700 cursor-pointer hover:bg-gray-700/50 transition-colors"
                                            >
                                                <td className="py-3 px-4 font-semibold text-teal-400">
                                                    Order #{order.orderNumber}
                                                </td>
                                                <td className="py-3 px-4 text-gray-400">
                                                    {ordersGroup.reduce((acc, o) => acc + o.items.length, 0)}{" "}
                                                    item(s)
                                                </td>
                                                <td className="py-3 px-4 font-semibold text-gray-100">
                                                    ₱{totalPrice.toFixed(2)}
                                                </td>
                                                <td className="py-3 px-4 text-gray-400">{date}</td>
                                                <td className="py-3 px-4">
                                                    <Badge
                                                        className={`${order.status === "Delivered"
                                                                ? "bg-green-600"
                                                                : "bg-yellow-500"
                                                            } text-white`}
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

export default SellerOrders;
