"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group relative flex flex-col bg-white overflow-hidden product-card">
            <Link href={`/shop/${product.id}`} className="block relative aspect-[1/1] overflow-hidden bg-gray-50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Hover Transition */}
                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/5 transition-colors duration-500" />

                {/* Quick Add Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                    }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-8 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out bg-white text-foreground px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold shadow-2xl hover:bg-gold hover:text-gray-600 flex items-center space-x-2 z-10"
                >
                    <Plus className="w-3 h-3" />
                    <span>Add to Cart</span>
                </button>
            </Link>

            <div className="pt-6 pb-2 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-2 font-bold">{product.collection}</p>
                <Link href={`/shop/${product.id}`} className="block">
                    <h3 className="text-lg font-serif mb-2 group-hover:text-gold transition-colors duration-300">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm font-sans tracking-widest text-foreground font-medium">
                    ₹{product.price.toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
