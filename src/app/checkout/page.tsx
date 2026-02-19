"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, ChevronLeft, CreditCard } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isOrdering, setIsOrdering] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    });

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cart.length === 0 && !showSuccess) {
            router.push("/shop");
        }
    }, [cart, router, showSuccess]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOrdering(true);

        // Simulate luxury processing
        setTimeout(() => {
            const generatedId = "SRV-" + Math.random().toString(36).substr(2, 9).toUpperCase();
            setOrderId(generatedId);
            setShowSuccess(true);
            clearCart();
            setIsOrdering(false);

            // Modal Animation
            if (modalRef.current) {
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, scale: 0.9, y: 30 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power4.out" }
                );
            }

            // Redirect after 5 seconds
            setTimeout(() => {
                router.push("/");
            }, 5000);
        }, 1500);
    };

    if (cart.length === 0 && !showSuccess) return null;

    return (
        <div className="bg-white min-h-screen pb-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
                <Link href="/cart" className="inline-flex items-center text-[10px] uppercase tracking-widest text-gray-600 hover:text-gold mb-12 transition-colors font-bold">
                    <ChevronLeft className="w-3 h-3 mr-2" />
                    Review Cart
                </Link>

                <h1 className="text-4xl md:text-5xl font-serif mb-16 text-foreground">Shipping Details</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
                    {/* Form */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handlePlaceOrder} className="space-y-10">
                            <div className="space-y-8">
                                <h3 className="text-xs uppercase tracking-widest font-bold border-b border-gray-100 pb-4">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Full Name</label>
                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="border-b border-gray-300 py-3 outline-none focus:border-gold transition-colors text-sm font-medium text-foreground bg-transparent"
                                            placeholder="E.g., Alexander Sterling"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="border-b border-gray-300 py-3 outline-none focus:border-gold transition-colors text-sm font-medium text-foreground bg-transparent"
                                            placeholder="alexander@luxury.com"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="border-b border-gray-300 py-3 outline-none focus:border-gold transition-colors text-sm font-medium text-foreground bg-transparent"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 pt-6">
                                <h3 className="text-xs uppercase tracking-widest font-bold border-b border-gray-100 pb-4">Shipping Destination</h3>
                                <div className="flex flex-col">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Home or Office Address</label>
                                    <input
                                        required
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="border-b border-gray-200 py-3 outline-none focus:border-gold transition-colors text-sm font-light"
                                        placeholder="Suite 42, Marble Heights..."
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">City</label>
                                        <input
                                            required
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="border-b border-gray-200 py-3 outline-none focus:border-gold transition-colors text-sm font-light"
                                            placeholder="Mumbai"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Pincode</label>
                                        <input
                                            required
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            className="border-b border-gray-200 py-3 outline-none focus:border-gold transition-colors text-sm font-light"
                                            placeholder="400001"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isOrdering}
                                className="w-full h-16 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all duration-300 transform active:scale-95 disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center space-x-4"
                            >
                                {isOrdering ? (
                                    <span>Processing Selection...</span>
                                ) : (
                                    <>
                                        <CreditCard className="w-4 h-4" />
                                        <span>Complete Order - ₹{cartTotal.toLocaleString()}</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Side Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-gray-50 p-10 md:p-12">
                            <h2 className="text-xl font-serif mb-10 pb-6 border-b border-gray-200">Your Selection</h2>
                            <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar mb-10">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-sm font-serif mb-1">{item.name}</h4>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400">Qty: {item.quantity}</p>
                                        </div>
                                        <span className="text-sm font-light">₹{(item.price * item.quantity).toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-8 mt-10">
                                <div className="flex justify-between text-gray-700 mb-4 text-xs tracking-widest uppercase font-medium">
                                    <span>Complimentary Handling</span>
                                    <span className="text-gold font-bold">Standard Luxe</span>
                                </div>
                                <div className="flex justify-between items-end mt-6">
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground">Total Collection Value</span>
                                    <span className="text-3xl font-serif text-foreground">₹{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    <div
                        ref={modalRef}
                        className="relative bg-white p-12 md:p-20 max-w-xl w-full text-center shadow-2xl"
                    >
                        <div className="flex justify-center mb-10">
                            <CheckCircle2 className="w-20 h-20 text-gold stroke-[0.5px]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-foreground">Order Confirmed</h2>
                        <p className="text-muted-foreground text-lg font-normal leading-relaxed mb-10">
                            Your order has been placed successfully. Thank you for choosing SERAVINE.
                        </p>
                        <div className="p-6 bg-gray-50 border border-gray-100 mb-12">
                            <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Discovery Reference</span>
                            <span className="text-xl font-serif tracking-widest">{orderId}</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 animate-pulse">
                            Redirecting you to the Home Gallery...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
