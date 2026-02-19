export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    collection: "Men" | "Women" | "Unisex";
    topNotes: string[];
    middleNotes: string[];
    baseNotes: string[];
}

export const products: Product[] = [
    {
        id: "royal-oud",
        name: "Seravine Blaze Fire",
        description: "A majestic blend of rare agarwood, spiced with saffron and balanced by warm amber. The ultimate expression of luxury and tradition.",
        price: 1999,
        image: "/blaze-fire.PNG",
        category: "Oud",
        collection: "Men",
        topNotes: ["Saffron", "Cinnamon"],
        middleNotes: ["Rose", "Patchouli"],
        baseNotes: ["Agarwood (Oud)", "Amber", "Sandalwood"],
    },
    {
        id: "midnight-musk",
        name: "Seravine Eclipse",
        description: "An alluring and mysterious scent featuring deep musk notes, layered with dark berries and a hint of smoky vanilla.",
        price: 1799,
        image: "/eclipse.PNG",
        category: "Musk",
        collection: "Unisex",
        topNotes: ["Blackcurrant", "Bergamot"],
        middleNotes: ["Night-blooming Jasmine", "Incense"],
        baseNotes: ["Black Musk", "Vanilla Bean", "Oakmoss"],
    },
    {
        id: "velvet-bloom",
        name: "Seravine Flora Aventes",
        description: "A sophisticated floral bouquet of Damascus rose and peony, softened by a touch of white musk and fresh green tea.",
        price: 1699,
        image: "/flora-aventes.PNG",
        category: "Floral",
        collection: "Women",
        topNotes: ["Green Tea", "Mandarin"],
        middleNotes: ["Damascus Rose", "Peony"],
        baseNotes: ["White Musk", "Cedarwood", "Apricot"],
    },
    {
        id: "ocean-breeze",
        name: "Seravine Azure",
        description: "A refreshing aquatic fragrance that captures the essence of the Mediterranean coast with citrus and sea salt.",
        price: 1599,
        image: "/blaze-fire.PNG",
        category: "Fresh",
        collection: "Unisex",
        topNotes: ["Sea Salt", "Grapefruit"],
        middleNotes: ["Seaweed", "Sage"],
        baseNotes: ["Ambrette", "Woody Notes"],
    },
    {
        id: "spiced-amber",
        name: "Seravine Ember",
        description: "A warm, spicy fragrance with notes of cardamom, sandalwood, and rich Madagascar vanilla.",
        price: 2199,
        image: "/flora-aventes.PNG",
        category: "Oriental",
        collection: "Men",
        topNotes: ["Cardamom", "Pink Pepper"],
        middleNotes: ["Sandalwood", "Clove"],
        baseNotes: ["Amber", "Vanilla", "Tonka Bean"],
    },
    {
        id: "mystic-rose",
        name: "Seravine Rosé",
        description: "A modern take on the classic rose scent, combined with spicy patchouli and sweet lychee.",
        price: 1899,
        image: "/eclipse.PNG",
        category: "Floral",
        collection: "Women",
        topNotes: ["Lychee", "Rhubarb"],
        middleNotes: ["Turkish Rose", "Peony"],
        baseNotes: ["Cashmeran", "Musk", "Patchouli"],
    }
];
