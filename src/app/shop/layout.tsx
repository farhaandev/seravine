import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Collection | Seravine",
    description: "Explore our range of premium fragrances, crafted for those who appreciate the finer things in life.",
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
