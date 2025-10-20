import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Popover } from "./ui/popover";
import CartView from "./CartView";

const Header = ({ search, setSearch, cartCount, view, setView }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 shadow-md border-b border-gray-700">
            <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6 gap-4">
                {/* Logo / Title */}
                <h1
                    className="text-4xl font-bold cursor-pointer whitespace-nowrap transition-colors"
                    onClick={() => setView("home")}
                >
                    <span className="text-teal-400 hover:text-teal-300">BUY</span>
                    <span className="text-white">cians 🛒</span>
                </h1>

                {/* Search Bar */}
                <div className="flex-1 min-w-[200px] mx-4">
                    <Input
                        type="text"
                        placeholder="Search for products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-full px-4 py-2 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/40 transition"
                        aria-label="Search for products"
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-3">
                    <Button
                        onClick={() => setView("orders")}
                        className={`bg-transparent hover:bg-gray-800 hover:text-teal-400 text-gray-100 ${view === "orders" ? "text-teal-400 font-semibold underline" : ""
                            }`}
                    >
                        My Orders
                    </Button>

                    <Button
                        onClick={() => setView("profile")}
                        className={`bg-transparent hover:bg-gray-800 hover:text-teal-400 text-gray-100 ${view === "profile" ? "text-teal-400 font-semibold underline" : ""
                            }`}
                    >
                        <User className="w-4 h-4 mr-2" /> Profile
                    </Button>

                    <Button
                        onClick={() => setView("cart")}
                        className="relative bg-transparent hover:bg-gray-800 hover:text-teal-400 text-gray-100"
                        aria-label="Cart"
                    >
                        <ShoppingCart className="w-4 h-4 mr-2" /> Cart
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Button>

                    {/* Sign Out Button */}
                    <Button
                        onClick={handleLogout}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 transition-colors"
                    >
                        Sign Out
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
