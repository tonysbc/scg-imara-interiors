import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-green">
      {/* Texture Overlay and Header are global in layout.tsx */}

      <main className="flex-1 pt-56 md:pt-64 pb-32">
        <div className="max-w-6xl mx-auto px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left: Philosophy & Text */}
            <div className="space-y-16">
               <section>
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-8 block">Founding Narrative</span>
                  <h1 className="text-4xl md:text-6xl font-light text-white leading-[1.1] tracking-tight">
                    Conscious Design <br />
                    <span className="italic font-serif text-brand-gold">by Chiko.</span>
                  </h1>
                  <p className="mt-12 text-lg font-light leading-relaxed text-white/60 max-w-lg">
                    Imara Interiors Design Co. was founded by Chiko with a vision to bridge the gap between soulful aesthetics and mindful living. Based in our Sombetini studio in Arusha, Tanzania, we draw inspiration from the raw beauty of our landscape and the rich heritage of local craftsmanship.
                  </p>
               </section>

               <section className="border-t border-brand-gold/20 pt-16">
                  <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-8">The Sombetini Studio</h2>
                  <div className="space-y-8 text-white/50 font-light leading-relaxed">
                     <p>
                        Our approach is deeply personal. Chiko believes that a well-designed space is a sanctuary—a physical manifestation of one's values and aspirations. By prioritizing natural, sustainable materials and supporting our community of local artisans in Arusha, we create environments that are as ethical as they are beautiful.
                     </p>
                     <p>
                        From our physical shop in Sombetini to global residential projects, our signature "Conscious Luxury" style remains consistent: understated, elegant, and deeply rooted in Tanzanian heritage.
                     </p>
                  </div>
               </section>

               <section className="bg-white/5 border border-white/10 p-12 text-white">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-brand-gold block mb-6">A Note from Chiko</span>
                  <p className="text-2xl font-light italic font-serif leading-relaxed opacity-90 text-brand-gold-light">
                    "We don't just design rooms; we curate experiences that honor the harmony between humanity and the Tanzanian landscape."
                  </p>
               </section>
            </div>

            {/* Right: Visual / Founders Area */}
            <div className="sticky top-48">
               <div className="aspect-[3/4] w-full bg-white/5 border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-[10px] tracking-[0.5em] uppercase text-white/10 italic">Studio Atmosphere — Arusha</span>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute -bottom-1 -left-1 w-32 h-32 border-l border-b border-brand-gold/40"></div>
               </div>
               <div className="mt-12 grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-3">Established</span>
                    <p className="text-sm font-light text-white/70 tracking-widest uppercase">2020</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-3">Shop Location</span>
                    <p className="text-sm font-light text-white/70 tracking-widest uppercase">Sombetini, Arusha</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Closing Connection Section */}
          <section className="mt-48 pt-32 border-t border-white/10 text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-8 block">Next Step</span>
            <h3 className="text-4xl md:text-6xl font-light text-white italic font-serif leading-tight max-w-2xl mx-auto">
              Visit our Sombetini Studio <br />
              <span className="text-brand-gold-light">in Arusha.</span>
            </h3>
            <div className="mt-16 flex justify-center">
              <Link 
                href="/inquire" 
                className="bg-brand-gold px-14 py-5 text-xs font-bold tracking-[0.2em] uppercase text-brand-green hover:bg-white transition-all duration-500 shadow-2xl shadow-black/20"
              >
                Schedule a Visit
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
