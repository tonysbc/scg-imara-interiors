import Image from "next/image";
import Link from "next/link";
import { shopItems } from "@/data/shop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sombetini Boutique",
  description: "A curated collection of conscious artisanal artifacts, handcrafted by local artisans and rooted in Tanzanian heritage.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Editorial Header - Boutique Style */}
      <section className="pt-56 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-brand-green/10 pb-12 gap-12">
          <div className="max-w-3xl">
            <span className="text-brand-sienna text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">
              The Sombetini Boutique | Arusha | Tanzania
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-brand-green leading-[1.1] tracking-tight">
              Artisanal <br />
              <span className="text-brand-gold italic">Artifacts.</span>
            </h1>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="text-[10px] text-brand-green/60 uppercase tracking-widest leading-loose font-bold">
              A curated collection of conscious pieces, handcrafted by local artisans and rooted in Tanzanian heritage.
            </p>
          </div>
        </div>

        {/* The Boutique Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {shopItems.map((item) => (
            <Link key={item.id} href={`/shop/${item.id}`} className="group block">
              <div className="relative aspect-square w-full overflow-hidden bg-brand-green/5 border border-brand-green/10 group-hover:border-brand-sienna/30 transition-all duration-700">
                {/* Availability Tag - Burnt Sienna */}
                <div className="absolute top-8 left-8 z-10">
                  <span className="bg-brand-sienna px-4 py-1.5 text-[8px] font-black tracking-[0.2em] uppercase text-white shadow-xl shadow-brand-sienna/20">
                    {item.availability}
                  </span>
                </div>
                
                {/* Image Placeholder with Hover Story Overlay */}
                <div className="flex h-full w-full items-center justify-center relative">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-brand-green/10 italic text-center px-8 transition-opacity group-hover:opacity-0">{item.title}</span>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-green/95 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-12 text-center space-y-8">
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-brand-gold">The Provenance</span>
                    <p className="text-xs text-white/80 leading-relaxed italic font-serif">
                      Handcrafted in {item.origin} using sustainable {item.material.toLowerCase()}. A testament to conscious luxury.
                    </p>
                    <div className="w-12 h-[1px] bg-brand-gold/20"></div>
                    <span className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase border-b border-brand-gold/30 pb-1">View Piece —</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-8 right-8 transition-opacity group-hover:opacity-0">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-green/40">{item.price} —</span>
                </div>
              </div>

              {/* Metadata Spec Bar */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4 text-[9px] font-bold tracking-[0.2em] uppercase text-brand-sienna">
                  <span>{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-sienna/30"></span>
                  <span>{item.origin}</span>
                </div>
                <h2 className="text-3xl font-light text-brand-green group-hover:text-brand-sienna transition-colors leading-tight">
                  {item.title}
                </h2>
                <div className="pt-4 border-t border-brand-green/5">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-brand-green/30 font-medium italic">
                    {item.material}
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
