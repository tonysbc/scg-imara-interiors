import Image from "next/image";
import Link from "next/link";
import { shopItems } from "@/data/shop";
import { notFound } from "next/navigation";

export default async function ShopItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = shopItems.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-56 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Column: Image Showcase */}
          <div className="space-y-12">
            <div className="aspect-square bg-brand-green/5 border border-brand-green/10 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-black/5">
              <span className="text-[10px] tracking-[0.5em] uppercase text-brand-green/10 italic text-center px-8">{item.title} — Main Feature</span>
              
              {/* Availability Tag */}
              <div className="absolute top-8 left-8">
                <span className="bg-brand-sienna px-4 py-1.5 text-[8px] font-black tracking-[0.2em] uppercase text-white shadow-xl shadow-brand-sienna/20">
                  {item.availability}
                </span>
              </div>
            </div>
            
            {/* Gallery Thumbnails (Placeholder) */}
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[4/3] bg-brand-green/5 border border-brand-green/5 flex items-center justify-center">
                 <span className="text-[8px] tracking-[0.3em] uppercase text-brand-green/10 italic">Detail Study 01</span>
              </div>
              <div className="aspect-[4/3] bg-brand-green/5 border border-brand-green/5 flex items-center justify-center">
                 <span className="text-[8px] tracking-[0.3em] uppercase text-brand-green/10 italic">Material Close-up</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Connection */}
          <div className="lg:sticky lg:top-64 space-y-16">
            <div className="space-y-8 pb-12 border-b border-brand-green/10">
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-sienna">
                <span>{item.category}</span>
                <span className="w-1 h-1 rounded-full bg-brand-sienna/30"></span>
                <span>{item.origin}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-green leading-[1.1] tracking-tight">
                {item.title}
              </h1>
              <p className="text-2xl font-light italic font-serif text-brand-green/60 leading-relaxed">
                "A soulful piece originating from {item.origin}, handcrafted using traditional {item.material.toLowerCase()} techniques."
              </p>
            </div>

            {/* Spec Bar (Shop Version) */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <div>
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-3">Origin</span>
                <p className="text-sm font-light text-brand-green/60 uppercase tracking-widest">{item.origin}</p>
              </div>
              <div>
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-3">Material</span>
                <p className="text-sm font-light text-brand-green/60 uppercase tracking-widest">{item.material}</p>
              </div>
              <div>
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-3">Dimensions</span>
                <p className="text-sm font-light text-brand-green/60 uppercase tracking-widest italic font-serif leading-relaxed">Please inquire for exact dimensions and custom sizing options.</p>
              </div>
              <div>
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-3">Price</span>
                <p className="text-xl font-serif text-brand-green italic">{item.price}</p>
              </div>
            </div>

            {/* Inquiry Connection */}
            <div className="pt-12 border-t border-brand-green/10">
              <Link 
                href={`/inquire?piece=${encodeURIComponent(item.title)}`}
                className="w-full inline-block bg-brand-sienna py-6 text-white text-[10px] font-bold tracking-[0.4em] uppercase text-center hover:bg-brand-green transition-all duration-500 shadow-xl shadow-brand-sienna/10"
              >
                Inquire about this Piece
              </Link>
              <p className="mt-8 text-[10px] text-brand-green/40 uppercase tracking-widest text-center leading-loose">
                Each piece is handcrafted. <br />
                Delivery times vary by location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Connection Section */}
      <section className="mt-32 pt-32 pb-48 border-t border-brand-green/10 bg-brand-green/5">
        <div className="max-w-7xl mx-auto px-8 md:px-24">
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-12 text-center">More from the Sombetini Shop</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 opacity-40 hover:opacity-100 transition-opacity">
            {shopItems.filter(i => i.id !== item.id).map((i) => (
              <Link key={i.id} href={`/shop/${i.id}`} className="group space-y-4">
                <div className="aspect-square bg-brand-green/10 border border-brand-green/5" />
                <h3 className="text-xl font-light text-brand-green italic font-serif">{i.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
