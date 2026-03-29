/**
 * Calculator Logic
 * This module handles the calculation for spans, posts, materials, and pricing
 * based on dimensions and selections.
 */

interface Dimensions {
    width: number;
    height: number;
    depth?: number;
}

interface MaterialSelection {
    materialType: string;
    quantity: number;
}

interface Quote {
    spans: number;
    posts: number;
    materials: MaterialSelection[];
    totalPrice: number;
}

const calculateSpans = (dimensions: Dimensions): number => {
    // Logic to calculate spans based on dimensions
    return Math.ceil(dimensions.width / 10); // Example logic
};

const calculatePosts = (dimensions: Dimensions): number => {
    // Logic to calculate posts based on dimensions
    return Math.ceil(dimensions.height / 8); // Example logic
};

const calculateMaterials = (selections: MaterialSelection[]): MaterialSelection[] => {
    // Logic to calculate materials based on selections
    return selections.map(selection => ({
        materialType: selection.materialType,
        quantity: selection.quantity
    }));
};

const calculateTotalPrice = (materials: MaterialSelection[]): number => {
    // Dummy pricing logic
    return materials.reduce((total, material) => total + (material.quantity * 20), 0);
};

export const calculateQuote = (dimensions: Dimensions, selections: MaterialSelection[]): Quote => {
    const spans = calculateSpans(dimensions);
    const posts = calculatePosts(dimensions);
    const materials = calculateMaterials(selections);
    const totalPrice = calculateTotalPrice(materials);

    return {
        spans,
        posts,
        materials,
        totalPrice,
    };
};