"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Check, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation - Faster and smoother
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all", // Ensures no stuck opacity 0
      });

      // Section Reveals - Improved trigger and stagger
      const sections = gsap.utils.toArray(".reveal-section");
      sections.forEach((section: any) => {
        gsap.from(section, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whyChoose = [
    "Luxury in Every Drop",
    "Premium Essential Oils",
    "Long-Lasting & High Performance",
    "Strong Projection & Premium Feel",
    "Modern, Unique & Signature Scents",
    "Affordable Luxury Pricing",
    "Premium Packaging & Presentation",
    "Perfect for Daily Wear & Special Occasions",
  ];

  const collections = [
    {
      title: "For Men",
      description: "Bold, refined, and confident fragrances designed for modern masculinity.",
      image: "/blaze-fire.PNG"
    },
    {
      title: "For Women",
      description: "Elegant, graceful, and sophisticated scents crafted for timeless beauty.",
      image: "/flora-aventes.PNG"
    },
    {
      title: "Unisex Collection",
      description: "Fresh, modern, and versatile fragrances perfect for everyday luxury.",
      image: "/eclipse.PNG"
    },
  ];

  const qualityPoints = [
    "High-Grade Perfume Oils",
    "Skin-Safe Formula",
    "Premium Bottle & Packaging",
    "Modern Luxury Finish",
    "Satisfaction Guaranteed",
  ];

  const reviews = [
    { text: "Premium fragrance with modern luxury feel.", stars: 5 },
    { text: "Smells expensive and lasts all day.", stars: 5 },
    { text: "Perfect balance of quality and price.", stars: 5 },
    { text: "Strong projection and classy scent.", stars: 5 },
  ];

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden border-b border-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,161,74,0.05),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-white -z-10" />

        <div className="hero-content relative z-20 text-center max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.6em] text-gold mb-4 font-bold animate-fade-in">
            EST. 2024 • SERAVINE PERFUME
          </p>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-[1.1] tracking-tighter text-foreground">
            Luxury in Every <span className="italic text-gold">Drop</span>
          </h1>
          <p className="sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Modern luxury fragrances crafted to define your presence. Experience premium quality, long-lasting performance, and signature scents designed for those who command attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/shop"
              className="inline-block px-12 py-5 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
            >
              Shop Collection
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-12 hidden lg:block">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300 vertical-text [writing-mode:vertical-rl] rotate-180">
            SCENTS OF DISTINCTION
          </span>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="reveal-section py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-10 text-foreground">Welcome to Seravine Perfume</h2>
        <div className="space-y-6 text-muted-foreground text-lg font-medium leading-relaxed">
          <p>
            A modern luxury fragrance brand dedicated to delivering premium, long-lasting scents that define your personality and elevate your presence.
          </p>
          <p>
            Each fragrance is crafted using high-quality essential oils to ensure richness, depth, and all-day performance.
          </p>
          <p className="text-gold font-serif italic text-xl mt-8">
            Luxury in Every Drop — Designed for Modern Confidence.
          </p>
        </div>
      </section>

      {/* 3. WHY CHOOSE SERAVINE PERFUME */}
      <section className="reveal-section py-32 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-foreground">Why Choose Seravine Perfume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          {whyChoose.map((point, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="bg-gold/10 p-2 rounded-full flex-shrink-0">
                <Check className="w-4 h-4 text-gold" />
              </div>
              <span className="text-foreground font-bold uppercase tracking-widest text-[11px]">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR COLLECTIONS */}
      <section className="reveal-section py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-foreground">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collections.map((col, i) => (
            <div key={i} className="group bg-white border border-gray-100 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[1/1] bg-gray-50 mb-8 relative overflow-hidden flex items-center justify-center">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-foreground">{col.title}</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8">
                {col.description}
              </p>
              <Link href={`/shop?collection=${col.title.replace("For ", "").replace(" Collection", "")}`} className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground hover:text-gold transition-colors block border-t border-gray-100 pt-4">
                View Collection
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="reveal-section py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Featured Products</h2>
          <Link href="/shop" className="text-[10px] uppercase tracking-widest font-bold text-gold border-b-2 border-gold pb-1">
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. OUR QUALITY PROMISE */}
      <section className="reveal-section py-32 bg-foreground text-background px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10 text-background">Our Quality Promise</h2>
          <p className="text-gray-400 text-lg mb-16 font-medium leading-relaxed">
            At Seravine Perfume, quality is our signature. Every fragrance is tested to ensure premium scent quality, long-lasting performance, and a luxury experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {qualityPoints.map((point, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <Check className="w-6 h-6 text-gold" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section className="reveal-section py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-foreground">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-10 bg-gray-50 text-center flex flex-col items-center border border-transparent hover:border-gold/20 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="flex space-x-1 mb-6">
                {[...Array(review.stars)].map((_, s) => (
                  <Star key={s} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground font-serif italic text-lg leading-relaxed">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="reveal-section py-40 px-6 text-center bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none">
          <span className="text-[30vw] font-serif font-bold whitespace-nowrap">SERAVINE</span>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-12 text-foreground">Experience Luxury in Every Drop</h2>
          <Link
            href="/shop"
            className="inline-block px-12 py-5 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all duration-300 shadow-xl"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
