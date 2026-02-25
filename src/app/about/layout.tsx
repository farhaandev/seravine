import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story | Seravine",
    description: "Learn about the heritage, craftsmanship, and the journey of Seravine - crafting memories since 2024.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
