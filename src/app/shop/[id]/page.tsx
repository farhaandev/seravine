"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, Plus, Minus, Shield, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === id);
        if (foundProduct) {
            setProduct(foundProduct);

            // Page Fade-in - Faster and more reliable
            gsap.from(".product-reveal", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all"
            });
        } else {
            router.push("/shop");
        }
    }, [id, router]);

    if (!product) return null;

    return (
        <div className="bg-white min-h-screen pb-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
                {/* Breadcrumbs */}
                <Link href="/shop" className="inline-flex items-center text-[10px] uppercase tracking-widest text-gray-600 hover:text-gold mb-12 transition-colors font-bold">
                    <ChevronLeft className="w-3 h-3 mr-2" />
                    Back to Collection
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
                    {/* Image Gallery */}
                    <div className="product-reveal relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-6 left-6 bg-gold text-white text-[10px] px-3 py-1 uppercase tracking-widest">
                            NEW ARRIVAL
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col">
                        <div className="product-reveal">
                            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4 font-bold">{product.category}</p>
                            <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-foreground">{product.name}</h1>
                            <p className="text-2xl font-normal tracking-widest mb-10 text-foreground">₹{product.price.toLocaleString()}</p>
                        </div>

                        <div className="product-reveal space-y-8 mb-12">
                            <p className="text-muted-foreground leading-relaxed font-normal text-lg">
                                {product.description}
                            </p>

                            {/* Fragrance Notes */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 text-foreground">Top Notes</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1 font-medium">
                                        {product.topNotes.map(n => <li key={n}>{n}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 text-foreground">Middle Notes</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1 font-medium">
                                        {product.middleNotes.map(n => <li key={n}>{n}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 text-foreground">Base Notes</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1 font-medium">
                                        {product.baseNotes.map(n => <li key={n}>{n}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="product-reveal flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-12 border-t border-gray-100">
                            <div className="flex items-center border border-gray-200 h-14">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="px-4 py-2 hover:text-gold transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="px-4 py-2 hover:text-gold transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                onClick={() => {
                                    for (let i = 0; i < quantity; i++) addToCart(product);
                                }}
                                className="flex-1 h-14 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all duration-300 transform active:scale-95"
                            >
                                Add to Luxury Cart
                            </button>
                        </div>

                        {/* Benefits */}
                        <div className="product-reveal grid grid-cols-3 gap-4 mt-16 pt-12 border-t border-gray-100">
                            <div className="flex flex-col items-center text-center">
                                <Shield className="w-5 h-5 mb-3 text-gold" />
                                <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Authenticity Guaranteed</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Truck className="w-5 h-5 mb-3 text-gold" />
                                <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Complimentary Shipping</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <RotateCcw className="w-5 h-5 mb-3 text-gold" />
                                <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Elegant Returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
