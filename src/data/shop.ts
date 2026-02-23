export interface ShopItem {
  id: string;
  title: string;
  category: string;
  origin: string;
  material: string;
  availability: "In-Store (Sombetini)" | "Inquire for Availability" | "Sold Out";
  price: string; // E.g., "Inquire" or "TZS 150k"
  image: string;
}

export const shopItems: ShopItem[] = [
  {
    id: "s1",
    title: "The Hand-Carved Teak Credenza",
    category: "Furniture",
    origin: "Arusha, Tanzania",
    material: "Solid Teak & Brass",
    availability: "Inquire for Availability",
    price: "Inquire",
    image: "/shop/credenza.jpg"
  },
  {
    id: "s2",
    title: "Organic Linen Sofa Suite",
    category: "Seating",
    origin: "Tanzania",
    material: "Hand-spun Linen",
    availability: "In-Store (Sombetini)",
    price: "Inquire",
    image: "/shop/sofa.jpg"
  },
  {
    id: "s3",
    title: "Serengeti Dusk Bronze Lamp",
    category: "Lighting",
    origin: "Dar es Salaam",
    material: "Bronze & Parchment",
    availability: "In-Store (Sombetini)",
    price: "Inquire",
    image: "/shop/lamp.jpg"
  }
];
