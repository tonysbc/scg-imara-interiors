export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The Art of Conscious Living: A Sombetini Perspective",
    slug: "conscious-living-sombetini",
    date: "February 20, 2026",
    category: "Philosophy",
    excerpt: "How our Arusha studio is redefining luxury through the lens of sustainability and Tanzanian heritage.",
    content: `
      Conscious living is not just a trend; it is a return to our roots. In the heart of Sombetini, our studio works with materials that tell a story—reclaimed teak, hand-spun linen, and local bronze. 
      
      Luxury, in its truest form, is the harmony between our environment and our inner peace. By prioritizing artisanal craftsmanship over mass production, we create spaces that are not only beautiful but also ethically sound.
    `,
    image: "/blog/conscious-living.jpg"
  },
  {
    id: "b2",
    title: "Serengeti Dusk: Finding Inspiration in the Wild",
    slug: "serengeti-dusk-inspiration",
    date: "February 15, 2026",
    category: "Design Journal",
    excerpt: "Exploring the color palette of the Serengeti and how it informs our 'Rooted Luxury' aesthetic.",
    content: `
      The Serengeti at dusk offers a masterclass in color theory. The transition from golden ochre to deep forest green, accented by the burnt sienna of the earth, is the foundation of our current palette.
      
      When designing the Mapito Safari Camp, we didn't just want to place a building in the landscape; we wanted the landscape to flow through the building.
    `,
    image: "/blog/serengeti-inspiration.jpg"
  }
];
