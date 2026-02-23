import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-brand-green">
      <section className="pt-56 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
        {/* Blog Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-brand-sienna mb-12">
            <span>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-brand-sienna/30"></span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-brand-green leading-[1.1] tracking-tight mb-16">
            {post.title}
          </h1>
          <p className="text-2xl font-light italic font-serif text-brand-green/60 leading-relaxed max-w-2xl mx-auto">
            {post.excerpt}
          </p>
        </div>

        {/* Feature Image */}
        <div className="aspect-[21/9] w-full bg-brand-green/5 border border-brand-green/10 mb-24 flex items-center justify-center shadow-2xl shadow-black/5">
          <span className="text-[10px] tracking-[0.5em] uppercase text-brand-green/10 italic text-center px-8 font-bold">{post.title} — Atmospheric Perspective</span>
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="prose prose-lg prose-serif text-brand-green/80 leading-loose whitespace-pre-line text-xl font-light font-serif italic">
            {post.content}
          </div>

          {/* Author Tag */}
          <div className="pt-16 border-t border-brand-green/10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-[10px] font-bold tracking-widest text-brand-gold">CK</div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-green block mb-1">Notes by Chiko</span>
                <p className="text-[10px] text-brand-green/40 uppercase tracking-widest font-bold italic">Sombetini Studio, Arusha</p>
              </div>
            </div>
            
            <div className="flex gap-12 items-center">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">Share the Notes —</span>
              <div className="flex gap-8">
                 <a href="#" className="text-[10px] font-black text-brand-green/30 hover:text-brand-sienna transition-colors">X</a>
                 <a href="#" className="text-[10px] font-black text-brand-green/30 hover:text-brand-sienna transition-colors">IN</a>
                 <a href="#" className="text-[10px] font-black text-brand-green/30 hover:text-brand-sienna transition-colors">PI</a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Journal Navigation */}
        <div className="mt-32 pt-16 border-t border-brand-green/10 flex justify-center">
          <Link 
            href="/blog" 
            className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold hover:text-brand-sienna transition-all border-b border-brand-gold/20 pb-1"
          >
            ← Back to Studio Notes
          </Link>
        </div>
      </section>
    </main>
  );
}
