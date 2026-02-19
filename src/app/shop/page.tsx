"use client";

import React, { useEffect, useRef, useState, useMemo, Suspense } from "react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import gsap from "gsap";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

function ShopContent() {
    const gridRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    const [filter, setFilter] = useState<string>(searchParams.get("collection") || "All");
    const [sortBy, setSortBy] = useState<string>("featured");
    const [isSortOpen, setIsSortOpen] = useState(false);

    useEffect(() => {
        const collection = searchParams.get("collection") || "All";
        setFilter(collection);
    }, [searchParams]);

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        const params = new URLSearchParams(searchParams.toString());
        if (newFilter === "All") {
            params.delete("collection");
        } else {
            params.set("collection", newFilter);
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products];

        // Filter
        if (filter !== "All") {
            result = result.filter(p => p.collection === filter);
        }

        // Sort
        switch (sortBy) {
            case "price-low":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                result.sort((a, b) => b.price - a.price);
                break;
            case "alphabetical":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Featured/Default
                break;
        }

        return result;
    }, [filter, sortBy]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".shop-header > *", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all",
            });

            // Re-animate grid on filter
            gsap.from(".product-card", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out",
                clearProps: "all",
            });
        }, gridRef);

        return () => ctx.revert();
    }, [filter, sortBy]);

    const categories = ["All", "Men", "Women", "Unisex"];
    const sortOptions = [
        { label: "Featured", value: "featured" },
        { label: "Price: Low to High", value: "price-low" },
        { label: "Price: High to Low", value: "price-high" },
        { label: "Alphabetical", value: "alphabetical" },
    ];

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* Header */}
            <div className="shop-header pt-24 pb-20 px-6 text-center border-b border-gray-50">
                <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">The Collection</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto font-medium tracking-wide uppercase text-[10px] sm:text-xs">
                    Explore our range of premium fragrances, crafted for those who appreciate the finer things in life.
                </p>
            </div>

            {/* Controls Bar */}
            <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Categories */}
                    <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 border ${filter === cat
                                    ? "bg-foreground text-background border-foreground"
                                    : "bg-transparent text-foreground border-gray-200 hover:border-gold hover:text-gold"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Sorting */}
                    <div className="relative w-full md:w-auto flex justify-end">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground hover:text-gold transition-colors"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            <span>Sort By: {sortOptions.find(o => o.value === sortBy)?.label}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isSortOpen && (
                            <div className="absolute top-full right-0 mt-4 bg-white border border-gray-100 shadow-2xl py-4 w-56 z-50 animate-fade-in">
                                {sortOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => {
                                            setSortBy(opt.value);
                                            setIsSortOpen(false);
                                        }}
                                        className={`w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-colors ${sortBy === opt.value ? "text-gold bg-gray-50" : "text-foreground hover:bg-gray-50"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12" ref={gridRef}>
                <div className="flex items-center justify-between mb-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                        Showing {filteredAndSortedProducts.length} Results
                    </p>
                </div>

                {filteredAndSortedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredAndSortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-40 text-center">
                        <h3 className="text-2xl font-serif text-gray-400 mb-4">No products found</h3>
                        <button
                            onClick={() => handleFilterChange("All")}
                            className="text-[10px] uppercase tracking-widest font-bold text-gold border-b border-gold"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <ShopContent />
        </Suspense>
    );
}
