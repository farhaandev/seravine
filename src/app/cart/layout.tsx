import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Collection | Seravine",
    description: "View and manage your selected luxury fragrances in your Seravine cart.",
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
