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
        if (!formData.storeName || !formData.contact || !formData.idNumber || !formData.reason || !formData.agreed) {
            alert("⚠️ Please complete all fields and sign the contract to continue.");
            return;
        }
        alert("✅ Verification request submitted successfully!");
        onVerifySuccess(); // mark as verified
        setView("profile"); // go back to profile page
    };

    return (
        <div className="flex justify-center py-10">
            <Card className="w-full max-w-2xl bg-white shadow-lg rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-orange-600">
                        Seller Verification Form
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
                        />
                        <Input
                            type="text"
                            name="contact"
                            placeholder="Contact Number or Email"
                            value={formData.contact}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="idNumber"
                            placeholder="Shop ID Number"
                            value={formData.idNumber}
                            onChange={handleChange}
                        />
                        <Textarea
                            name="reason"
                            placeholder="Reason for selling (e.g., I want to sell snacks for students)"
                            value={formData.reason}
                            onChange={handleChange}
                        />

                        <div className="border rounded-lg p-4 bg-gray-50 text-sm text-gray-700">
                            <h3 className="font-semibold mb-2">📜 Seller Agreement</h3>
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
                                />
                                <span>I agree to the Seller Agreement.</span>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-500 text-white"
                        >
                            Submit Verification
                        </Button>

                        <Button
                            type="button"
                            onClick={() => setView("profile")}
                            className="w-full bg-gray-300 hover:bg-gray-200 text-gray-700"
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
