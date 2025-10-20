import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import CartView from "@/components/CartView";
import OrdersView from "@/components/OrdersView";
import SellerOrders from "@/pages/SellerOrders";
import VerificationPage from "@/components/VerificationPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import chick from "../assets/chicksilog.png";
import adobo from "../assets/adobo.png";
import burg from "../assets/burgmeal.png";
import coffee from "../assets/coffee.png";
import fries from "../assets/fries.png";
import hotdog from "../assets/hotdogsand.png";
import pancit from "../assets/pancit.png";
import shake from "../assets/shake.png";
import siomai from "../assets/siomai.png";
import spag from "../assets/spaghetti.png";
import ChatWidget from "@/components/Chatwidget";

const HomeDashboard = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Chicken Silog", price: 85, image: chick },
        { id: 2, name: "Burger Meal", price: 70, image: burg },
        { id: 3, name: "Hotdog Sandwich", price: 45, image: hotdog },
        { id: 4, name: "Pancit Canton", price: 50, image: pancit },
        { id: 5, name: "Siomai Rice", price: 60, image: siomai },
        { id: 6, name: "Spaghetti", price: 55, image: spag },
        { id: 7, name: "Adobo Rice Meal", price: 85, image: adobo },
        { id: 8, name: "Fries with Cheese", price: 40, image: fries },
        { id: 9, name: "Iced Coffee", price: 35, image: coffee },
        { id: 10, name: "Mango Shake", price: 50, image: shake },
    ]);

    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [view, setView] = useState("home");
    const [search, setSearch] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [product, setProduct] = useState({ name: "", price: "", image: "" });

    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState("");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const handleSendMessage = () => {
        if (!chatInput.trim()) return;
        setMessages((prev) => [...prev, { text: chatInput, sender: "You" }]);
        setChatInput("");
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "Thanks for your message! 😊", sender: "Seller" },
            ]);
        }, 1000);
    };

    const addToCart = (productItem) => {
        setCart((prev) => [...prev, { ...productItem, quantity: 1 }]);
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const placeOrder = () => {
        if (!cart.length) {
            alert("Your cart is empty.");
            return;
        }

        const orderNumber = `ORD-${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`;
        const buyerId = `GUEST-${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`;

        const items = cart.map((c) => ({
            id: c.id,
            name: c.name,
            price: Number(c.price),
            image: c.image,
            quantity: c.quantity || 1,
        }));

        const total = items.reduce((s, it) => s + it.price * (it.quantity || 1), 0);

        const newOrder = {
            orderNumber,
            buyerId,
            items,
            total,
            status: "Pending",
            createdAt: new Date().toISOString(),
        };

        const updated = [newOrder, ...orders];
        setOrders(updated);
        localStorage.setItem("orders", JSON.stringify(updated));
        window.dispatchEvent(new Event("storage"));
        setCart([]);
        setView("orders");
        alert(`✅ Order placed — ${orderNumber}  ${buyerId} `);
    };

    const markOrderDelivered = (orderNumber) => {
        const updated = orders.map((o) =>
            o.orderNumber === orderNumber ? { ...o, status: "Delivered" } : o
        );
        setOrders(updated);
        localStorage.setItem("orders", JSON.stringify(updated));
        window.dispatchEvent(new Event("storage"));
    };

    const handleOrderStatusUpdate = (orderNumberOrId, newStatus) => {
        if (!orderNumberOrId) return;
        const found = orders.find((o) => o.orderNumber === orderNumberOrId);
        if (found) {
            const updated = orders.map((o) =>
                o.orderNumber === orderNumberOrId ? { ...o, status: newStatus } : o
            );
            setOrders(updated);
            localStorage.setItem("orders", JSON.stringify(updated));
            window.dispatchEvent(new Event("storage"));
            return;
        }

        const updatedFallback = orders.map((o) =>
            o.id === orderNumberOrId ? { ...o, status: newStatus } : o
        );
        setOrders(updatedFallback);
        localStorage.setItem("orders", JSON.stringify(updatedFallback));
        window.dispatchEvent(new Event("storage"));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        alert(`Selected file: ${file.name}`); // Alert on file selection

        const reader = new FileReader();
        reader.onloadend = () => {
            setProduct((prev) => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!product.name || !product.price || !product.image) {
            alert("⚠️ Please fill all fields and upload an image");
            return;
        }

        const newProduct = {
            id: products.length + 1,
            name: product.name,
            price: parseFloat(product.price),
            image: product.image,
        };

        setProducts((prev) => [...prev, newProduct]);
        setProduct({ name: "", price: "", image: "" });
        alert("✅ Product added successfully!"); // Alert on success
    };

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col bg-[#1e293b] text-[#f1f5f9] relative">
            <Header
                search={search}
                setSearch={setSearch}
                cartCount={cart.length}
                view={view}
                setView={setView}
            />

            <main className="flex-grow container mx-auto p-6">
                {view === "home" && (
                    <ProductGrid products={filteredProducts} addToCart={addToCart} />
                )}
                {view === "cart" && (
                    <CartView
                        cart={cart}
                        placeOrder={placeOrder}
                        removeFromCart={removeFromCart}
                    />
                )}
                {view === "orders" && <OrdersView />}
                {view === "sellerorders" && <SellerOrders />}
                {view === "verify" && (
                    <VerificationPage
                        setView={setView}
                        onVerifySuccess={() => setIsVerified(true)}
                    />
                )}

                {view === "profile" && (
                    <div className="flex justify-center">
                        <Card className="w-full max-w-3xl bg-[#334155] text-[#f1f5f9] shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-[#38bdf8]">
                                    {isVerified ? "Seller Dashboard 🛍️" : "My Profile"}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-[#cbd5e1]">User Information</h3>
                                    <p>Name: John Doe</p>
                                    <p>Email: johndoe@example.com</p>
                                </div>

                                <Separator className="my-4 bg-[#475569]" />

                                {isVerified ? (
                                    <>
                                        <div className="mb-6">
                                            <h3 className="font-semibold text-[#cbd5e1] mb-2">Add a Product</h3>
                                            <form
                                                onSubmit={handleAddProduct}
                                                className="space-y-3 bg-[#475569] p-4 rounded-lg"
                                            >
                                                <Input
                                                    className="bg-[#1e293b] text-[#f1f5f9] border-[#475569]"
                                                    placeholder="Product Name"
                                                    value={product.name}
                                                    onChange={(e) =>
                                                        setProduct((p) => ({ ...p, name: e.target.value }))
                                                    }
                                                />
                                                <Input
                                                    className="bg-[#1e293b] text-[#f1f5f9] border-[#475569]"
                                                    placeholder="Price (₱)"
                                                    type="number"
                                                    value={product.price}
                                                    onChange={(e) =>
                                                        setProduct((p) => ({ ...p, price: e.target.value }))
                                                    }
                                                />
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    className="bg-[#1e293b] text-[#f1f5f9]"
                                                    onChange={handleImageUpload}
                                                />
                                                <Button
                                                    type="submit"
                                                    className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                                                >
                                                    Add Product
                                                </Button>
                                            </form>
                                        </div>

                                        <Separator className="my-4 bg-[#475569]" />

                                        <div>
                                            <h3 className="font-semibold text-[#cbd5e1] mb-3">Order Transactions</h3>
                                            {orders.length === 0 ? (
                                                <p className="text-[#cbd5e1]">No customer orders yet.</p>
                                            ) : (
                                                <div className="overflow-x-auto">
                                                    <table className="w-full border-collapse text-[#f1f5f9]">
                                                        <thead>
                                                            <tr className="bg-[#2563eb] text-white">
                                                                <th className="text-left py-2 px-4">Order #</th>
                                                                <th className="text-left py-2 px-4">Items</th>
                                                                <th className="text-left py-2 px-4">Total</th>
                                                                <th className="text-left py-2 px-4">Status</th>
                                                                <th className="text-left py-2 px-4">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {orders.map((order) => (
                                                                <tr
                                                                    key={order.orderNumber}
                                                                    className="border-b border-[#475569] hover:bg-[#475569] transition-colors cursor-pointer"
                                                                    onClick={() => {
                                                                        setView("sellerorders");
                                                                        window.dispatchEvent(new CustomEvent("open-order", { detail: order.orderNumber }));
                                                                    }}
                                                                >
                                                                    <td className="py-3 px-4 font-semibold text-[#38bdf8]">{order.orderNumber}</td>
                                                                    <td className="py-3 px-4">{order.items.length} item(s)</td>
                                                                    <td className="py-3 px-4 font-semibold text-[#f8fafc]">₱{order.total.toFixed(2)}</td>
                                                                    <td className="py-3 px-4">
                                                                        <Badge className={`${order.status === "Delivered" ? "bg-green-600" : "bg-yellow-600"} text-white`}>
                                                                            {order.status}
                                                                        </Badge>
                                                                    </td>
                                                                    <td className="py-3 px-4">
                                                                        {order.status !== "Delivered" && (
                                                                            <Button
                                                                                size="sm"
                                                                                className="bg-green-600 hover:bg-green-700 text-white"
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    markOrderDelivered(order.orderNumber);
                                                                                }}
                                                                            >
                                                                                Mark as Delivered
                                                                            </Button>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center">
                                        <p className="text-[#cbd5e1] mb-4">
                                            You are not verified to sell products yet.
                                        </p>
                                        <Button
                                            onClick={() => setView("verify")}
                                            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                                        >
                                            Verify to Sell
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </main>

            <Footer />
            <ChatWidget />
        </div>
    );
};

export default HomeDashboard;
