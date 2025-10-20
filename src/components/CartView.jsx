import React from "react";
import { Button } from "@/components/ui/button";

const CartView = ({ cart, placeOrder }) => {
    const handlePlaceOrder = () => {
        if (cart.length === 0) return;

        const buyerId = `Guest-${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`;
        const orderNumber = `ORD-${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`;

        const total = cart.reduce((sum, item) => sum + item.price, 0);

        const orderData = {
            orderNumber,
            buyerId,
            totalItems: cart.length,
            totalPrice: total,
            status: "Pending",
            date: new Date().toLocaleString(),
            products: cart.map((item) => ({
                productName: item.name,
                price: item.price,
                quantity: item.quantity || 1,
                status: "Pending",
            })),
        };

        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        existingOrders.push(orderData);
        localStorage.setItem("orders", JSON.stringify(existingOrders));

        placeOrder(); // Clears the cart
    };

    return (
        <div className="bg-[#334155] p-6 rounded-2xl shadow-md border border-[#475569] text-[#f1f5f9]">
            <h2 className="text-2xl font-semibold mb-4 text-[#38bdf8]">🛍 My Cart</h2>

            {cart.length === 0 ? (
                <p className="text-[#cbd5e1] text-center py-6 bg-[#475569] rounded-lg shadow-inner">
                    Your cart is empty.
                </p>
            ) : (
                <div className="space-y-3">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b border-[#475569] py-3 px-2 hover:bg-[#475569] rounded-lg transition-all"
                        >
                            <span className="text-[#f8fafc] font-medium">{item.name}</span>
                            <span className="font-semibold text-[#38bdf8]">
                                ₱{item.price.toFixed(2)}
                            </span>
                        </div>
                    ))}

                    <div className="mt-6 border-t border-[#475569] pt-4">
                        <div className="flex justify-between text-[#cbd5e1] mb-4 text-lg">
                            <span>Total</span>
                            <span className="font-bold text-[#38bdf8]">
                                ₱
                                {cart
                                    .reduce((sum, item) => sum + item.price, 0)
                                    .toFixed(2)}
                            </span>
                        </div>

                        <Button
                            onClick={handlePlaceOrder}
                            className="bg-[#2563eb] hover:bg-[#1d4ed8] w-full text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                        >
                            Place Order
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartView;
