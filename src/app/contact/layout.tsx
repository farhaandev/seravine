import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Seravine",
    description: "Get in touch with Seravine for product enquiries, signature scent assistance, or to visit our office.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
