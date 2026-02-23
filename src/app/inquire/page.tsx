export default function InquirePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-56 md:pt-64 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-black/5 pb-8 gap-8">
          <div>
            <span className="text-brand-sienna text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
              Sombetini Studio | Arusha | Tanzania
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green leading-tight">
              Begin a <br />Connection.
            </h1>
          </div>
          <div className="max-w-xs">
            <p className="text-sm text-foreground/60 leading-relaxed uppercase tracking-wider text-[10px]">
              Whether it's a turnkey interior, a curated renovation, or a single artisanal piece, we welcome the opportunity to discuss your vision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Column: Context */}
          <div className="space-y-16">
            <div className="aspect-[4/5] bg-brand-green/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply" />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-brand-sienna" />
                <span className="text-brand-sienna text-[10px] font-bold tracking-[0.3em] uppercase">Direct Connection</span>
              </div>
              <div className="space-y-4">
                <a 
                  href="mailto:info@imarainteriorsdesignco.com" 
                  className="block text-2xl font-serif text-brand-green hover:text-brand-sienna transition-colors"
                >
                  info@imarainteriorsdesignco.com
                </a>
                <a 
                  href="tel:+255765560563" 
                  className="block text-2xl font-serif text-brand-green hover:text-brand-sienna transition-colors"
                >
                  +255 765 560 563
                </a>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 leading-loose">
                Sombetini Road, Arusha<br />
                Monday — Friday: 09:00 - 18:00<br />
                Saturday: By Appointment Only
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white p-8 md:p-12 border border-black/5 shadow-sm">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2 group">
                  <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-foreground/40 group-focus-within:text-brand-sienna transition-colors">Name</label>
                  <input 
                    type="text" 
                    placeholder="CHIKO"
                    className="w-full border-b border-black/10 py-4 focus:outline-none focus:border-brand-sienna transition-colors bg-transparent placeholder:text-black/5 text-sm uppercase tracking-widest"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-foreground/40 group-focus-within:text-brand-sienna transition-colors">Email</label>
                  <input 
                    type="email" 
                    placeholder="INFO@IMARAINTERIORSDESIGNCO.COM"
                    className="w-full border-b border-black/10 py-4 focus:outline-none focus:border-brand-sienna transition-colors bg-transparent placeholder:text-black/5 text-sm uppercase tracking-widest"
                  />
                </div>
              </div>

              <div className="space-y-2 group relative">
                <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-foreground/40 group-focus-within:text-brand-sienna transition-colors">Project Type</label>
                <div className="relative">
                  <select className="w-full border-b border-black/10 py-4 focus:outline-none focus:border-brand-sienna transition-colors bg-transparent text-sm uppercase tracking-widest appearance-none cursor-pointer pr-10">
                    <option>Residential Interior</option>
                    <option>Commercial / Hospitality</option>
                    <option>Custom Furniture Inquiry</option>
                    <option>Sombetini Shop Visit</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-sienna">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-foreground/40 group-focus-within:text-brand-sienna transition-colors">Message</label>
                <textarea 
                  rows={4}
                  placeholder="TELL US ABOUT YOUR VISION..."
                  className="w-full border-b border-black/10 py-4 focus:outline-none focus:border-brand-sienna transition-colors bg-transparent placeholder:text-black/5 text-sm uppercase tracking-widest resize-none"
                />
              </div>

              <button className="w-full bg-brand-sienna py-6 text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-brand-green transition-all duration-500 shadow-xl shadow-brand-sienna/10">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
