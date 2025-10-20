import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const VerificationPage = ({ onVerifySuccess, setView }) => {
    const [formData, setFormData] = useState({
        storeName: "",
        contact: "",
        idNumber: "",
        reason: "",
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !formData.storeName ||
            !formData.contact ||
            !formData.idNumber ||
            !formData.reason ||
            !formData.agreed
        ) {
            alert("⚠️ Please complete all fields and sign the contract to continue.");
            return;
        }
        alert("✅ Verification request submitted successfully!");
        onVerifySuccess();
        setView("profile");
    };

    return (
        <div className="flex justify-center py-10 min-h-screen-to-b from-gray-900 via-gray-800 to-black text-gray-100">
            <Card className="w-full max-w-2xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border border-gray-700 shadow-2xl rounded-2xl text-gray-100">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-teal-400 tracking-wide">
                        🧾 Seller Verification Form
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="text"
                            name="storeName"
                            placeholder="Store Name (e.g., DYCI Burger Hub)"
                            value={formData.storeName}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                        />
                        <Input
                            type="text"
                            name="contact"
                            placeholder="Contact Number or Email"
                            value={formData.contact}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                        />
                        <Input
                            type="text"
                            name="idNumber"
                            placeholder="Shop ID Number"
                            value={formData.idNumber}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                        />
                        <Textarea
                            name="reason"
                            placeholder="Reason for selling (e.g., I want to sell snacks for students)"
                            value={formData.reason}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                        />

                        <div className="border rounded-lg p-4 bg-gray-800/60 text-sm border-gray-700 text-gray-300">
                            <h3 className="font-semibold mb-2 text-teal-400">📜 Seller Agreement</h3>
                            <p>
                                By signing this agreement, I acknowledge that I am responsible
                                for all products listed under my name. I agree to follow the
                                rules of Dr. Yanga’s Colleges Inc. Marketplace and maintain
                                honesty in all transactions.
                            </p>
                            <label className="flex items-center gap-2 mt-3">
                                <input
                                    type="checkbox"
                                    name="agreed"
                                    checked={formData.agreed}
                                    onChange={handleChange}
                                    className="accent-teal-500"
                                />
                                <span>I agree to the Seller Agreement.</span>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold transition"
                        >
                            Submit Verification
                        </Button>

                        <Button
                            type="button"
                            onClick={() => setView("profile")}
                            className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium transition"
                        >
                            Cancel
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default VerificationPage;
