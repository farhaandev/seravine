"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import gsap from "gsap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Image from "next/image";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount } = useCart();
    const pathname = usePathname();

    const menuRef = useRef<HTMLDivElement>(null);
    const cartIconRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.5,
                ease: "power3.in",
            });
        }
    }, [isMenuOpen]);

    // Cart count animation
    useEffect(() => {
        if (cartCount > 0) {
            gsap.fromTo(
                cartIconRef.current,
                { scale: 1 },
                { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out" }
            );
        }
    }, [cartCount]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 border-b border-gray-100",
                isScrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm" : "sm:py-8 py-4 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-32 h-10 md:w-40 md:h-12 block">
                    <Image
                        src="/logo.png"
                        alt="SERAVINE"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300",
                                pathname === link.href ? "text-gold font-semibold" : "text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Cart & Menu Toggle */}
                <div className="flex items-center space-x-6">
                    <Link href="/cart" className="relative group p-2" ref={cartIconRef}>
                        <ShoppingBag className="w-6 h-6 text-foreground group-hover:text-gold transition-colors duration-300" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-white z-[100] translate-x-full md:hidden flex flex-col p-8"
            >
                <div className="flex justify-between items-center mb-12">
                    <span className="text-xl font-serif tracking-widest font-bold">SERAVINE</span>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2">
                        <X className="w-8 h-8 text-foreground" />
                    </button>
                </div>

                <nav className="flex flex-col space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-2xl font-serif uppercase tracking-widest border-b border-gray-100 pb-4",
                                pathname === link.href ? "text-gold" : "text-foreground"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto pt-12 text-center text-sm text-gray-500 uppercase tracking-widest">
                    Luxury in Every Drop
                </div>
            </div>
        </header>
    );
};

export default Header;
