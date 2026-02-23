import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { shopItems } from "@/data/shop";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-brand-green selection:bg-brand-gold/30 selection:text-white">
      {/* Texture Overlay and Navigation are global in layout.tsx */}

      <main className="flex-1 pt-24">
        {/* Hero Section - High Impact Dark Green & Gold */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 md:px-24">
          <div className="z-10 text-center max-w-5xl">
             <span className="inline-block mb-10 text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold/80 animate-pulse">
                Conscious Interior Design
             </span>
             <h1 className="text-5xl font-light leading-[1.1] tracking-tight text-white md:text-7xl lg:text-9xl">
                Bespoke Soul <br />
                <span className="italic font-serif text-brand-gold">Rooted Luxury.</span>
             </h1>
             <p className="mt-16 mx-auto max-w-xl text-lg font-light tracking-widest text-white/50 leading-relaxed md:text-xl uppercase">
                From Serengeti Safaris to Sombetini Artisans.
             </p>
             <div className="mt-20 flex flex-col items-center gap-12 sm:flex-row sm:justify-center">
                <a href="#portfolio" className="group flex items-center gap-6 text-xs font-bold tracking-[0.3em] uppercase text-white hover:text-brand-gold transition-all duration-500">
                  Featured Works <span className="w-16 h-[1px] bg-brand-gold group-hover:w-24 transition-all"></span>
                </a>
                <a href="#shop" className="bg-brand-gold px-14 py-5 text-xs font-bold tracking-[0.2em] uppercase text-brand-green hover:bg-white transition-all duration-500 shadow-2xl shadow-black/20">
                  The Sombetini Shop
                </a>
             </div>
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand-gold)_0%,_transparent_60%)]"></div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
             <div className="w-px h-24 bg-gradient-to-b from-transparent via-brand-gold to-transparent"></div>
          </div>
        </section>

        {/* Philosophy - Parchment contrast section */}
        <section className="bg-[#fdfdfc] px-8 py-32 text-center md:px-24 lg:py-48 relative overflow-hidden text-brand-green">
           <div className="max-w-4xl mx-auto relative z-10">
              <span className="mb-14 block text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">Our Philosophy</span>
              <h2 className="text-3xl font-light leading-relaxed md:text-5xl lg:text-6xl italic font-serif">
                "We believe that a space should be an echo of the soul—designed with <span className="text-brand-gold">intentionality</span> and rooted in heritage."
              </h2>
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-left border-t border-brand-green/10 pt-20">
                 <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase mb-6 text-brand-gold">Sustainable</h4>
                    <p className="text-sm font-light leading-relaxed opacity-70 italic">Prioritizing natural materials that age with grace and respect for the earth.</p>
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase mb-6 text-brand-gold">Bespoke</h4>
                    <p className="text-sm font-light leading-relaxed opacity-70 italic">Every detail is a collaboration, curated specifically for the unique soul of the space.</p>
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase mb-6 text-brand-gold">Timeless</h4>
                    <p className="text-sm font-light leading-relaxed opacity-70 italic">Designing beyond trends to ensure functionality and beauty for generations.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Portfolio - Editorial Listing Style */}
        <section id="portfolio" className="px-8 py-32 md:px-24 bg-brand-green">
           <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 mb-32">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold mb-6 block">The Portfolio</span>
                <h3 className="text-4xl font-light tracking-tight text-white md:text-6xl italic font-serif">Curated Collections.</h3>
              </div>
              <a href="#portfolio" className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white/40 hover:text-brand-gold transition-all">
                The Full Archive <span className="w-8 h-[1px] bg-brand-gold group-hover:w-16 transition-all"></span>
              </a>
           </div>
           
           <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link key={project.id} href={`/portfolio/${project.slug}`} className="group cursor-pointer">
                   <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 border border-white/10 group-hover:border-brand-gold/40 transition-all duration-700">
                      <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/10 italic text-center px-8 group-hover:text-brand-gold/40 transition-all">{project.title}</span>
                      </div>
                      <div className="absolute top-8 left-8">
                         <span className="bg-brand-gold px-3 py-1 text-[8px] font-black tracking-widest uppercase text-brand-green">
                           {project.status}
                         </span>
                      </div>
                      <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                         <span className="text-[9px] tracking-[0.3em] uppercase font-bold border-b border-brand-gold/50 pb-1">Explore Narrative —</span>
                      </div>
                   </div>
                   <div className="mt-10 space-y-4">
                      <div className="flex items-center gap-4 text-[9px] font-bold tracking-[0.2em] uppercase text-brand-gold/60">
                         <span>{project.serviceType}</span>
                         <span className="w-1 h-1 rounded-full bg-brand-gold/30"></span>
                         <span>{project.location}</span>
                      </div>
                      <h4 className="text-3xl font-light text-white group-hover:text-brand-gold transition-colors leading-tight">{project.title}</h4>
                      <div className="pt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/5">
                        {project.materials.map((m) => (
                          <span key={m} className="text-[9px] tracking-widest uppercase text-white/30 font-medium italic">{m}</span>
                        ))}
                      </div>
                   </div>
                </Link>
              ))}
           </div>
        </section>

        {/* Shop - Editorial Listing Style */}
        <section id="shop" className="px-8 py-32 md:px-24 bg-white">
           <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 mb-32">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-6 block">The Sombetini Shop</span>
                <h3 className="text-4xl font-light tracking-tight text-brand-green md:text-6xl italic font-serif">Artisanal Artifacts.</h3>
              </div>
              <a href="#shop" className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-brand-green/40 hover:text-brand-green transition-all">
                The Boutique <span className="w-8 h-[1px] bg-brand-gold group-hover:w-16 transition-all"></span>
              </a>
           </div>

           <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
              {shopItems.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                   <div className="relative aspect-square w-full overflow-hidden bg-brand-green/5 border border-brand-green/10 group-hover:border-brand-gold/40 transition-all duration-700">
                      <div className="absolute top-8 left-8">
                         <span className="bg-brand-green px-3 py-1 text-[8px] font-black tracking-widest uppercase text-brand-gold">
                           {item.availability}
                         </span>
                      </div>
                      <div className="flex h-full w-full items-center justify-center">
                         <span className="text-[10px] tracking-[0.5em] uppercase text-brand-green/10 italic text-center px-8">{item.title}</span>
                      </div>
                      <div className="absolute inset-0 bg-brand-green/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-12 text-center space-y-6">
                         <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-brand-gold">The Story</span>
                         <p className="text-xs text-white/70 leading-relaxed italic font-serif">
                            A soulful piece originating from {item.origin}, handcrafted using traditional {item.material.toLowerCase()} techniques.
                         </p>
                         <div className="w-8 h-[px] bg-brand-gold/30"></div>
                         <span className="text-[10px] text-brand-gold font-bold tracking-widest uppercase">Inquire —</span>
                      </div>
                      <div className="absolute bottom-8 right-8 group-hover:opacity-0 transition-opacity">
                         <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold">{item.price} —</span>
                      </div>
                   </div>
                   <div className="mt-10 space-y-4 text-brand-green">
                      <div className="flex items-center gap-4 text-[9px] font-bold tracking-[0.2em] uppercase text-brand-gold">
                         <span>{item.category}</span>
                         <span className="w-1 h-1 rounded-full bg-brand-gold/40"></span>
                         <span>{item.origin}</span>
                      </div>
                      <h4 className="text-2xl font-light group-hover:text-brand-gold transition-colors leading-tight">{item.title}</h4>
                      <div className="pt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-brand-green/10 text-brand-green/40 uppercase text-[9px] tracking-widest italic">
                        {item.material}
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>
    </div>
  );
}
