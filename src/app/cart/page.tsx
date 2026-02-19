"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import NextImage from "next/image";

export default function CartPage() {
    const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cart-item-reveal", {
                x: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all"
            });

            gsap.from(".cart-summary-reveal", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
                clearProps: "all"
            });
        }, undefined); // Fix for TypeScript error: null is not assignable to scope
        return () => ctx.revert();
    }, []);

    if (cart.length === 0) {
        return (
            <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center px-6">
                <div className="bg-gray-50 p-12 rounded-full mb-8">
                    <ShoppingBag className="w-16 h-16 text-gray-200" />
                </div>
                <h1 className="text-3xl font-serif mb-6 text-foreground">Your collection is empty</h1>
                <p className="text-muted-foreground mb-10 text-center max-w-sm font-medium">
                    It seems you haven't discovered your signature scent yet.
                </p>
                <Link
                    href="/shop"
                    className="px-10 py-5 bg-foreground text-background text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all duration-300"
                >
                    Explore Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
                <h1 className="text-4xl md:text-5xl font-serif mb-16">Your Luxury Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
                    {/* Cart Items */}
                    <div className="lg:col-span-8">
                        <div className="border-t border-gray-100">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="cart-item-reveal flex flex-col sm:flex-row items-center sm:items-start py-10 border-b border-gray-100 group"
                                >
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 mb-6 sm:mb-0 sm:mr-8 relative overflow-hidden shrink-0 border border-gray-100">
                                        <NextImage
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 text-center sm:text-left">
                                        <div className="flex flex-col sm:flex-row justify-between mb-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1 font-bold">{item.category}</p>
                                                <h3 className="text-xl font-serif text-foreground">{item.name}</h3>
                                            </div>
                                            <p className="text-lg font-medium mt-2 sm:mt-0 text-foreground">₹{item.price.toLocaleString()}</p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
                                            <div className="flex items-center border border-gray-100 h-10">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-3 hover:text-gold transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 hover:text-gold transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="mt-4 sm:mt-0 text-[10px] uppercase tracking-widest text-gray-600 hover:text-foreground flex items-center transition-colors px-2 py-1 font-bold"
                                            >
                                                <X className="w-3 h-3 mr-2" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/shop" className="inline-flex items-center text-[10px] uppercase tracking-widest text-gray-600 hover:text-gold mt-12 transition-colors font-bold">
                            <ArrowLeft className="w-3 h-3 mr-2" />
                            Continue Discovery
                        </Link>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-4">
                        <div className="cart-summary-reveal bg-gray-50 p-8 md:p-10 sticky top-32">
                            <h2 className="text-xl font-serif mb-8">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm text-gray-700 font-medium">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700 font-medium">
                                    <span>Shipping</span>
                                    <span className="text-gold uppercase tracking-widest text-[10px] font-bold">Complimentary</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-8 mb-10">
                                <div className="flex justify-between items-end">
                                    <span className="text-xs uppercase tracking-widest font-bold">Total</span>
                                    <span className="text-2xl font-serif">₹{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="w-full h-14 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all duration-300 flex items-center justify-center space-x-3 group"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="mt-8 text-center">
                                <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">Secure Luxury Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
