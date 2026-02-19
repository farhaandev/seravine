"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export default function AboutPage() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-reveal", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                clearProps: "all"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white min-h-screen pb-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="about-reveal order-2 lg:order-1 relative group">
                        <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
                            {/* Premium Visual Fallback */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-200 font-serif text-[20vw] lg:text-[15vw] select-none opacity-40">SERAVINE</span>
                            </div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(201,161,74,0.1),transparent)]" />

                            {/* Decorative Frame */}
                            <div className="absolute inset-8 border border-gray-100 pointer-events-none group-hover:inset-6 transition-all duration-700" />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/5 backdrop-blur-sm p-4 hidden md:block">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-gold">Pure Essence</p>
                            <p className="text-[8px] text-gray-400 mt-2">Sourced from the heart of nature.</p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <span className="about-reveal text-xs uppercase tracking-[0.5em] text-gold mb-8 font-bold">The Heritage</span>
                        <h1 className="about-reveal text-5xl md:text-7xl font-serif mb-12 leading-tight text-foreground">Crafting Memories <br /> <span className="italic text-gold">Since 2024</span></h1>
                        <div className="about-reveal space-y-8 text-muted-foreground font-medium leading-relaxed text-lg">
                            <p>
                                SERAVINE was born from a simple yet profound desire: to capture the intangible beauty of a single moment and preserve it in a bottle. Our journey began in the aromatic markets of Grasse, traversing the rugged oud forests of Assam, and the delicate rose valleys of Bulgaria.
                            </p>
                            <p>
                                We believe that a fragrance is more than just a scent; it is an invisible signature, a silent storyteller that lingers in the air and deep within the soul. Each drop of SERAVINE is a masterclass in balance, blending rare botanicals with modern alchemy.
                            </p>
                            <p>
                                Our commitment to luxury extends beyond the olfactory. We honor the Earth that provides our ingredients, ensuring every extraction is sustainable and every artisan is respected. Luxury, to us, is the harmony of nature and human excellence.
                            </p>
                        </div>

                        <div className="about-reveal grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
                            <div>
                                <h4 className="text-4xl font-serif mb-2 text-gold">100%</h4>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Natural Origins</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif mb-2 text-gold">Global</h4>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Artisan Network</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
