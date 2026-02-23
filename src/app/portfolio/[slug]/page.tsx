import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-brand-green">
      {/* Header and Texture are global in layout.tsx */}

      <main className="flex-1 pt-56 md:pt-64 pb-32">
        {/* Project Hero Header */}
        <section className="px-8 md:px-24 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-8 block animate-in fade-in slide-in-from-left-4 duration-1000">
              {project.category} — {project.year}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
               <div className="lg:col-span-8 group">
                  {/* Main Showcase Image Placeholder */}
                  <div className="aspect-[16/9] w-full bg-white/5 border border-white/10 group-hover:border-brand-gold/20 transition-all duration-700 flex items-center justify-center overflow-hidden">
                     <span className="text-[10px] tracking-[0.5em] uppercase text-white/10 italic">{project.title} — Main Feature</span>
                  </div>
               </div>
               <div className="lg:col-span-4 border-t border-brand-gold/20 pt-10">
                  <div className="space-y-12">
                     <div className="flex flex-wrap gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">
                        <div>
                           <span className="opacity-40 block mb-2">Service</span>
                           {project.serviceType}
                        </div>
                        <div>
                           <span className="opacity-40 block mb-2">Status</span>
                           {project.status}
                        </div>
                     </div>
                     <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-4">Location</span>
                        <p className="text-white/80 font-light tracking-wide uppercase text-sm">{project.location}</p>
                     </div>
                     <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-4">The Narrative</span>
                        <p className="text-white/50 font-light leading-relaxed text-lg italic font-serif">
                          {project.description}
                        </p>
                     </div>
                     <div className="pt-8 border-t border-white/5">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold block mb-4">Material Palette</span>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                           {project.materials.map((m) => (
                             <span key={m} className="text-[11px] text-white/40 italic font-serif">{m}</span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Elevated Depth */}
        <section className="bg-white px-8 md:px-24 py-48 text-brand-green">
           <div className="max-w-6xl mx-auto space-y-48">
              {/* Full width imagery with elevation shadow */}
              <div className="aspect-[21/9] w-full bg-[#f8f7f4] border border-brand-green/5 flex items-center justify-center shadow-2xl shadow-black/5">
                 <span className="text-[10px] tracking-[0.5em] uppercase text-brand-green/10 italic font-bold">Atmospheric Perspective</span>
              </div>

              {/* Dynamic grid imagery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                 <div className="aspect-square bg-[#f8f7f4] border border-brand-green/5 flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-brand-green/10 italic">Material Study</span>
                 </div>
                 <div className="aspect-[4/5] bg-[#f8f7f4] border border-brand-green/5 flex items-center justify-center md:translate-y-32">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-brand-green/10 italic">Spatial Interaction</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Closing Narrative integration */}
        <section className="px-8 md:px-24 py-64 text-center bg-brand-green text-white relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-brand-gold)_0%,_transparent_70%)]"></div>
           <h3 className="text-3xl md:text-5xl font-light italic font-serif text-brand-gold-light/80 max-w-3xl mx-auto leading-relaxed relative z-10">
             "A testament to the quiet power of natural materials and intentional living."
           </h3>
           <div className="mt-20 w-16 h-[1px] bg-brand-gold/40 mx-auto"></div>
        </section>
      </main>

      {/* Footer is global in layout.tsx */}
    </div>
  );
}
