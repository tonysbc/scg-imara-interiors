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
    id: "sample-1",
    title: "[SAMPLE] The Art of Conscious Living",
    slug: "sample-conscious-living",
    date: "February 20, 2026",
    category: "Philosophy",
    excerpt: "Note: This is a sample post. Chiko, please provide your actual design philosophy dispatches here.",
    content: `
      This is a placeholder for your first Studio Note. 
      
      Suggested Topic: How your Arusha studio is redefining luxury through the lens of sustainability and Tanzanian heritage.
    `,
    image: "/blog/sample-1.jpg"
  },
  {
    id: "sample-2",
    title: "[SAMPLE] Serengeti Dusk: Finding Inspiration",
    slug: "sample-serengeti-inspiration",
    date: "February 15, 2026",
    category: "Design Journal",
    excerpt: "Note: This is a sample post. Chiko, please provide your actual design journal entries here.",
    content: `
      This is a placeholder for your second Studio Note. 
      
      Suggested Topic: Exploring the color palette of the Serengeti and how it informs your 'Rooted Luxury' aesthetic.
    `,
    image: "/blog/sample-2.jpg"
  }
];
