"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoginPopup from "@/components/LoginPopup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [userInfo, setUserInfo] = useState<{ name: string; phone: string } | null>(null);

  // Show popup on initial load
  useEffect(() => {
    // Check if user has logged in this session (stored in sessionStorage)
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

    // Always show popup after a short delay on first load
    setTimeout(() => {
      setShowLoginPopup(true);
    }, 500);
  }, []);

  const handleLoginSubmit = (name: string, phone: string) => {
    const userData = { name, phone };
    setUserInfo(userData);
    sessionStorage.setItem("userInfo", JSON.stringify(userData));
    setShowLoginPopup(false);
  };

  const handleLoginClose = () => {
    setShowLoginPopup(false);
  };

  return (
    <html lang="en">
      <head>
        <title>GL Consultancy | Private College Admission Consultancy</title>
        <meta
          name="description"
          content="Trusted private college admission consultancy for Chennai. Compare colleges, explore courses, and book a free counselling appointment."
        />
      </head>
      <body className="bg-[#faf8f3] text-[#1e2749] antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LoginPopup
          isOpen={showLoginPopup}
          onClose={handleLoginClose}
          onSubmit={handleLoginSubmit}
        />
      </body>
    </html>
  );
}
