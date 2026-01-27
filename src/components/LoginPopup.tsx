"use client";

import { useState, useEffect } from "react";

interface LoginPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string, phone: string) => void;
}

export default function LoginPopup({ isOpen, onClose, onSubmit }: LoginPopupProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [nameError, setNameError] = useState("");

    // Validate phone number (10 digit Indian format)
    const validatePhone = (phoneNumber: string): boolean => {
        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile numbers start with 6-9 and are 10 digits
        return phoneRegex.test(phoneNumber);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // Only allow digits
        setPhone(value);

        if (value && !validatePhone(value)) {
            setPhoneError("Please enter a valid 10-digit phone number");
        } else {
            setPhoneError("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate name
        if (!name.trim()) {
            setNameError("Please enter your name");
            return;
        } else {
            setNameError("");
        }

        // Validate phone
        if (!validatePhone(phone)) {
            setPhoneError("Please enter a valid 10-digit phone number");
            return;
        }

        // Submit form
        onSubmit(name, phone);
    };

    // Reset form when popup opens
    useEffect(() => {
        if (isOpen) {
            setName("");
            setPhone("");
            setPhoneError("");
            setNameError("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#faf8f3] rounded-lg shadow-2xl w-full max-w-md mx-4 p-8 border-2 border-amber-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#1e2749] mb-2">
                        Welcome to GL Consultancy
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Please provide your details to continue
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-[#1e2749] mb-2"
                        >
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError("");
                            }}
                            className={`w-full px-4 py-3 rounded-lg border ${nameError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-amber-500"
                                } focus:ring-2 focus:border-transparent outline-none transition-all bg-white text-[#1e2749]`}
                            placeholder="Enter your full name"
                        />
                        {nameError && (
                            <p className="mt-1 text-sm text-red-500">{nameError}</p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-[#1e2749] mb-2"
                        >
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={10}
                            className={`w-full px-4 py-3 rounded-lg border ${phoneError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-amber-500"
                                } focus:ring-2 focus:border-transparent outline-none transition-all bg-white text-[#1e2749]`}
                            placeholder="10-digit mobile number"
                        />
                        {phoneError && (
                            <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                        )}
                        {phone && !phoneError && validatePhone(phone) && (
                            <p className="mt-1 text-sm text-green-600">✓ Valid phone number</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Continue
                    </button>
                </form>

                {/* Skip Option */}
                <div className="mt-4 text-center">
                    <button
                        onClick={onClose}
                        className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                    >
                        Skip for now
                    </button>
                </div>
            </div>
        </div>
    );
}
