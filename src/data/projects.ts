export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  serviceType: string;
  materials: string[];
  status: "Archive" | "Featured" | "In Progress";
  description: string;
  year: string;
  location: string;
  heroImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "0",
    slug: "mapito-safari-camp-serengeti",
    title: "Mapito Safari Camp, Serengeti",
    category: "Hospitality — Autograph Collection",
    serviceType: "Lead Interior Design",
    materials: ["Local Stone", "Reclaimed Timber", "Canvas", "Aged Brass"],
    status: "Featured",
    description: "A flagship hospitality project for the Marriott Autograph Collection. As lead designer, Chiko harmonized rugged Serengeti wilderness with sophisticated modern luxury, focusing on sustainable luxury and rooted Tanzanian craftsmanship.",
    year: "2024",
    location: "Serengeti National Park, Tanzania",
    heroImage: "/projects/mapito-hero.jpg",
    gallery: ["/projects/mapito-1.jpg", "/projects/mapito-2.jpg"]
  },
  {
    id: "1",
    slug: "serene-coastal-sanctuary",
    title: "Serene Coastal Sanctuary",
    category: "Residential",
    serviceType: "Full Turnkey Interior",
    materials: ["Teak", "Lime Wash", "Linen"],
    status: "Archive",
    description: "A tranquil retreat blending organic materials with expansive ocean views. Designed for a client seeking harmony between architecture and the natural landscape.",
    year: "2024",
    location: "Arusha, Tanzania",
    heroImage: "/projects/coastal-hero.jpg",
    gallery: ["/projects/coastal-1.jpg", "/projects/coastal-2.jpg"]
  },
  {
    id: "2",
    slug: "modern-minimalist-loft",
    title: "Modern Minimalist Loft",
    category: "Commercial",
    serviceType: "Spatial Design",
    materials: ["Polished Concrete", "Recycled Steel", "Glass"],
    status: "Archive",
    description: "An urban workspace defined by its clean lines, industrial accents, and intentional use of space. Focus on functional elegance and light.",
    year: "2023",
    location: "Nairobi, Kenya",
    heroImage: "/projects/loft-hero.jpg",
    gallery: ["/projects/loft-1.jpg", "/projects/loft-2.jpg"]
  }
];
