"use client";

import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import gsap from "gsap";

export default function ContactPage() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-reveal", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white min-h-screen pb-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
                <div className="max-w-2xl">
                    <h1 className="contact-reveal text-4xl md:text-6xl font-serif mb-8 leading-tight text-foreground">Get in Touch</h1>
                    <p className="contact-reveal text-muted-foreground font-normal text-lg mb-16 max-w-lg">
                        Allow us to assist you in finding your perfect signature scent or answer any enquiries about our collection.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Info */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="contact-reveal">
                            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">Office of Seravine</h3>
                            <div className="flex items-start space-x-6">
                                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                                <p className="text-sm font-medium leading-relaxed text-gray-700">
                                    Aura Suite 101, Marine Drive,<br />
                                    Mumbai, Maharashtra 400021<br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div className="contact-reveal">
                            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">Direct Enquiries</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-6 text-gray-700">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm font-medium">concierge@seravine.com</span>
                                </div>
                                <div className="flex items-center space-x-6 text-gray-700">
                                    <Phone className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm font-medium">+91 22 4567 8900</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-reveal pt-12">
                            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">Social Atmosphere</h3>
                            <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
                                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                                <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-8">
                        <div className="contact-reveal bg-gray-50 p-10 md:p-16">
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex flex-col">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Subject</label>
                                        <input
                                            className="bg-transparent border-b border-gray-300 py-3 outline-none focus:border-gold transition-colors text-sm font-medium text-foreground bg-transparent"
                                            placeholder="Product Enquiry"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Full Name</label>
                                        <input
                                            className="bg-transparent border-b border-gray-300 py-3 outline-none focus:border-gold transition-colors text-sm font-medium text-foreground bg-transparent"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Email Address</label>
                                    <input
                                        className="bg-transparent border-b border-gray-300 py-3 outline-none focus:border-gold transition-colors text-sm font-medium text-foreground bg-transparent"
                                        placeholder="you@email.com"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Your Message</label>
                                    <textarea
                                        rows={4}
                                        className="bg-transparent border-b border-gray-300 py-3 outline-none focus:border-gold transition-colors text-sm font-medium text-foreground bg-transparent resize-none"
                                        placeholder="How can we assist your olfactory journey?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="px-12 h-16 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all duration-300 flex items-center justify-center space-x-4 shadow-lg active:scale-95"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
