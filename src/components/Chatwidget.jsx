import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState("");

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

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-[#2563eb] hover:bg-[#1d4ed8] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-105"
            >
                <MessageCircle size={28} />
            </button>

            {/* Chat Box */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col">
                    <div className="bg-[#2563eb] text-white p-4 rounded-t-2xl flex justify-between items-center">
                        <span className="font-semibold text-lg">Customer Support</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 text-xl"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                        {messages.length === 0 ? (
                            <p className="text-gray-500 text-center mt-10">
                                Start the conversation 👋
                            </p>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-3 rounded-xl max-w-[75%] ${msg.sender === "You"
                                        ? "bg-[#e0f2fe] self-end ml-auto"
                                        : "bg-gray-200"
                                        }`}
                                >
                                    <p className="text-sm">
                                        <strong>{msg.sender}: </strong>
                                        {msg.text}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="border-t p-3 flex gap-2 bg-white rounded-b-2xl">
                        <Input
                            placeholder="Type your message..."
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleSendMessage}
                            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                        >
                            Send
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
