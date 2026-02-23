import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Notes",
  description: "Dispatches from Sombetini: Exploring the intersection of conscious design, Tanzanian heritage, and soulful living.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-brand-green">
      <section className="pt-56 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-brand-green/10 pb-12 gap-12">
          <div className="max-w-3xl">
            <span className="text-brand-sienna text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">
              Studio Notes | Dispatches from Sombetini
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-brand-green leading-[1.1] tracking-tight">
              Studio <br />
              <span className="text-brand-gold italic">Notes.</span>
            </h1>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="text-[10px] text-brand-green/60 uppercase tracking-widest leading-loose font-bold">
              Exploring the intersection of conscious design, Tanzanian heritage, and soulful living through the lens of Chiko.
            </p>
          </div>
        </div>

        {/* The Blog Feed */}
        <div className="space-y-32">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-7">
                <div className="aspect-[16/9] bg-brand-green/5 border border-brand-green/10 relative overflow-hidden group-hover:border-brand-sienna/30 transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-brand-green/10 italic text-center px-8">{post.title} — Feature Image</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-sienna">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-sienna/30"></span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-green group-hover:text-brand-sienna transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-lg text-brand-green/60 font-light leading-relaxed italic font-serif">
                  {post.excerpt}
                </p>
                <div className="pt-8">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold border-b border-brand-gold/30 pb-1 group-hover:text-brand-sienna group-hover:border-brand-sienna transition-all">
                    Read the Notes —
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
