import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-green px-8 py-32 md:px-24 text-white border-t border-white/5 w-full">
      <div className="grid grid-cols-1 gap-32 lg:grid-cols-2">
        <div className="space-y-16">
          <Link href="/" className="inline-block group">
            <Image
              src="/imara_Logo_transparent.png"
              alt="Imara Interiors Logo"
              width={180}
              height={60}
              className="h-auto w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <p className="max-w-sm text-sm font-light leading-loose text-white/40 tracking-wide uppercase text-[10px]">
            Imara Interiors Design Co. — crafting spaces that honor the harmony between Conscious Luxury and sustainable Tanzanian heritage. From Sombetini to the world.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 md:grid-cols-3">
          <div className="flex flex-col gap-8 text-[11px] tracking-[0.3em] uppercase">
            <span className="text-brand-gold font-black opacity-40">The Studio</span>
            <Link href="/about" className="text-white/60 hover:text-white transition-colors">Philosophy</Link>
            <Link href="/#portfolio" className="text-white/60 hover:text-white transition-colors">Projects</Link>
            <Link href="/inquire" className="text-white/60 hover:text-white transition-colors">Inquire</Link>
          </div>
          <div className="flex flex-col gap-8 text-[11px] tracking-[0.3em] uppercase">
            <span className="text-brand-gold font-black opacity-40">Inquiries</span>
            <p className="text-white/40 leading-relaxed uppercase">Sombetini, <br />Arusha, Tanzania</p>
            <a href="mailto:info@imarainteriorsdesignco.com" className="text-white/60 hover:text-white transition-colors border-b border-brand-gold/20 pb-1 w-fit">Email Us</a>
            <a href="tel:+255765560563" className="text-white/40 hover:text-white transition-colors text-[9px] font-bold tracking-widest">+255 765 560 563</a>
          </div>
        </div>
      </div>
      <div className="mt-48 flex flex-col items-center justify-between gap-12 border-t border-white/5 pt-16 text-[9px] font-bold tracking-[0.4em] uppercase text-white/20 sm:flex-row w-full">
        <span>© 2026 Imara Interiors Design Co. — All Rights Reserved.</span>
        <div className="flex gap-16">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
