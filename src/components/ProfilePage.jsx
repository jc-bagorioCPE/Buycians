import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrderKey, setSelectedOrderKey] = useState(null);

    // ✅ Load orders from localStorage
    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
    }, []);

    // ✅ Group orders by OrderNumber + BuyerID
    const groupedOrders = orders.reduce((acc, order) => {
        const key = `${order.orderNumber}-${order.buyerId}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(order);
        return acc;
    }, {});

    const handleOrderClick = (key) => setSelectedOrderKey(key);

    // ✅ Update Status
    const handleMarkDelivered = (orderNumber, buyerId) => {
        const updatedOrders = orders.map((order) =>
            order.orderNumber === orderNumber && order.buyerId === buyerId
                ? { ...order, status: "Delivered" }
                : order
        );

        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        alert(`✅ Order #${orderNumber} marked as Delivered`);
    };

    // ✅ SECOND TABLE - Details View
    if (selectedOrderKey) {
        const [orderNumber, buyerId] = selectedOrderKey.split("-");
        const selectedOrders = groupedOrders[selectedOrderKey];
        const firstOrder = selectedOrders[0];
        const status = firstOrder.status || "Pending";
        const totalPrice = selectedOrders.reduce((sum, o) => sum + o.total, 0);

        return (
            <div className="max-w-5xl mx-auto p-6">
                <Card className="shadow-lg bg-gradient-to-b from-gray-900 via-gray-800 to-black border border-gray-700 text-gray-100">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-2xl font-bold text-teal-400">
                                    Order #{orderNumber}
                                </CardTitle>
                                <p className="text-sm text-gray-400">
                                    Guest ID: <span className="font-semibold text-gray-200">{buyerId}</span>
                                </p>
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
                        <div className="overflow-x-auto rounded-lg border border-gray-700">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-800 text-teal-400 border-b border-gray-700">
                                        <th className="text-left py-2 px-4">Product Name</th>
                                        <th className="text-left py-2 px-4">Guest Number</th>
                                        <th className="text-left py-2 px-4">Cost</th>
                                        <th className="text-left py-2 px-4">Status</th>
                                        <th className="text-left py-2 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {firstOrder.items.map((item, i) => (
                                        <tr
                                            key={i}
                                            className="border-b border-gray-700 hover:bg-gray-800/70 transition"
                                        >
                                            <td className="py-3 px-4 flex items-center space-x-3">
                                                {item.image && (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 rounded object-cover"
                                                    />
                                                )}
                                                <span className="font-medium text-gray-200">{item.name}</span>
                                            </td>
                                            <td className="py-3 px-4 text-gray-400">{buyerId}</td>
                                            <td className="py-3 px-4 font-semibold text-gray-200">
                                                ₱{item.price.toFixed(2)}
                                            </td>
                                            <td className="py-3 px-4">
                                                <Badge
                                                    className={`${status === "Delivered"
                                                            ? "bg-teal-500"
                                                            : "bg-yellow-500"
                                                        } text-white px-3 py-1 rounded-full`}
                                                >
                                                    {status}
                                                </Badge>
                                            </td>
                                            <td className="py-3 px-4">
                                                <Button
                                                    onClick={() => handleMarkDelivered(orderNumber, buyerId)}
                                                    disabled={status === "Delivered"}
                                                    className={`${status === "Delivered"
                                                            ? "bg-gray-500 cursor-not-allowed"
                                                            : "bg-teal-500 hover:bg-teal-600"
                                                        } text-white font-semibold transition`}
                                                >
                                                    {status === "Delivered" ? "Delivered" : "Mark as Delivered"}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Separator className="my-4 bg-gray-700" />
                        <div className="text-right font-semibold text-lg text-gray-300">
                            Total:{" "}
                            <span className="text-teal-400">₱{totalPrice.toFixed(2)}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // ✅ FIRST TABLE - Summary View
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
                    {Object.keys(groupedOrders).length === 0 ? (
                        <div className="text-center text-gray-400 py-10">
                            <h2 className="text-lg font-semibold">No orders yet 😔</h2>
                            <p>Orders will appear here once customers place them.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto rounded-lg border border-gray-700">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-800 text-teal-400 border-b border-gray-700">
                                        <th className="text-left py-2 px-4">Order Number</th>
                                        <th className="text-left py-2 px-4">Total Items</th>
                                        <th className="text-left py-2 px-4">Total Price</th>
                                        <th className="text-left py-2 px-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(groupedOrders).map((key) => {
                                        const [orderNumber, buyerId] = key.split("-");
                                        const ordersGroup = groupedOrders[key];
                                        const total = ordersGroup.reduce((sum, o) => sum + o.total, 0);
                                        const status = ordersGroup[0].status || "Pending";
                                        const totalItems = ordersGroup[0].items.length;

                                        return (
                                            <tr
                                                key={key}
                                                onClick={() => handleOrderClick(key)}
                                                className="border-b border-gray-700 cursor-pointer hover:bg-gray-800/70 transition"
                                            >
                                                <td className="py-3 px-4 font-semibold text-teal-400">
                                                    #{orderNumber || "N/A"}
                                                </td>
                                                <td className="py-3 px-4 text-gray-300">{totalItems}</td>
                                                <td className="py-3 px-4 font-semibold text-gray-200">
                                                    ₱{total.toFixed(2)}
                                                </td>
                                                <td className="py-3 px-4">
                                                    <Badge
                                                        className={`${status === "Delivered"
                                                                ? "bg-teal-500"
                                                                : "bg-yellow-500"
                                                            } text-white px-3 py-1 rounded-full`}
                                                    >
                                                        {status}
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

export default ProfilePage;
