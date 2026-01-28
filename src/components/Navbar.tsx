"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Colleges", href: "#colleges" },
  { label: "Courses", href: "#courses" },
  { href: "/fees", label: "Fees" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're not on the home page 
    if (href.startsWith("#") && pathname !== "/") {
      e.preventDefault();
      // Navigate to home page with the hash 
      router.push("/" + href);
      setOpen(false);
    }
    // For regular links or hash links on home page, let default behavior happen 
  };

  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-amber-200 bg-[#f5f1e8]/95 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo Image */}
          <Image
            src="/image.png"
            alt="GL Consultancy Logo"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          <div>
            <span className="block text-xl md:text-2xl font-bold text-[#1e2749]" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}>
              GL CONSULTANCY
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[#1e2749] hover:text-amber-600 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#appointment"
            onClick={(e) => handleNavClick(e, "#appointment")}
            className="rounded-full bg-amber-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-amber-300 px-2 py-1 text-[#1e2749]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="text-xs">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-amber-200 bg-[#f5f1e8]">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[#1e2749] font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, "#appointment")}
              className="mt-1 rounded-full bg-amber-500 px-4 py-1.5 text-center font-semibold text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 
