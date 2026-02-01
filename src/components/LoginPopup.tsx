"use client";

import { useState, useEffect } from "react";

interface LoginPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string, phone: string) => Promise<void> | void;
    mandatory?: boolean; // If true, user cannot close without logging in
}

export default function LoginPopup({ isOpen, onClose, onSubmit, mandatory = false }: LoginPopupProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [nameError, setNameError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState("");

    // Validate phone number (10 digit Indian format)
    const validatePhone = (phoneNumber: string): boolean => {
        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile numbers start with 6-9 and are 10 digits
        return phoneRegex.test(phoneNumber);
    };

    // Validate name (minimum 2 characters)
    const validateName = (nameValue: string): boolean => {
        return nameValue.trim().length >= 2;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // Only allow digits
        setPhone(value);
        setServerError(""); // Clear server error on input change

        if (value && !validatePhone(value)) {
            setPhoneError("Please enter a valid 10-digit phone number");
        } else {
            setPhoneError("");
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);
        setServerError(""); // Clear server error on input change

        if (value && !validateName(value)) {
            setNameError("Name must be at least 2 characters");
        } else {
            setNameError("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prevent duplicate submissions
        if (isSubmitting) return;

        // Validate name
        if (!validateName(name)) {
            setNameError("Name must be at least 2 characters");
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
        setIsSubmitting(true);
        setServerError("");

        try {
            await onSubmit(name.trim(), phone);
        } catch (error) {
            setServerError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Reset form when popup opens
    useEffect(() => {
        if (isOpen) {
            setName("");
            setPhone("");
            setPhoneError("");
            setNameError("");
            setIsSubmitting(false);
            setServerError("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={mandatory ? undefined : onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#faf8f3] rounded-lg shadow-2xl w-full max-w-md mx-4 p-8 border-2 border-amber-200">
                {/* Close Button - Only show if not mandatory */}
                {!mandatory && (
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
                )}

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
                            onChange={handleNameChange}
                            disabled={isSubmitting}
                            className={`w-full px-4 py-3 rounded-lg border ${nameError
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-amber-500"
                                } focus:ring-2 focus:border-transparent outline-none transition-all bg-white text-[#1e2749] disabled:bg-gray-100 disabled:cursor-not-allowed`}
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
                            disabled={isSubmitting}
                            className={`w-full px-4 py-3 rounded-lg border ${phoneError
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-amber-500"
                                } focus:ring-2 focus:border-transparent outline-none transition-all bg-white text-[#1e2749] disabled:bg-gray-100 disabled:cursor-not-allowed`}
                            placeholder="10-digit mobile number"
                        />
                        {phoneError && (
                            <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                        )}
                        {phone && !phoneError && validatePhone(phone) && (
                            <p className="mt-1 text-sm text-green-600">✓ Valid phone number</p>
                        )}
                    </div>

                    {/* Server Error */}
                    {serverError && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-600">{serverError}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            "Continue"
                        )}
                    </button>
                </form>

                {/* Skip Option - Only show if not mandatory */}
                {!mandatory && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={onClose}
                            className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                        >
                            Skip for now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
