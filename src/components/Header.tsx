"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4 md:py-6 transition-all md:px-24 bg-brand-green/95 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center">
        <Link href="/" className="group">
          <Image
            src="/imara_Logo_transparent.png"
            alt="Imara Interiors Logo"
            width={160}
            height={50}
            className="h-auto w-auto object-contain transition-transform group-hover:scale-105 duration-500"
            priority
          />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-16 text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 md:flex">
        <Link href="/#portfolio" className="hover:text-brand-gold transition-colors duration-300">Portfolio</Link>
        <Link href="/#shop" className="hover:text-brand-gold transition-colors duration-300">Shop</Link>
        <Link href="/about" className="hover:text-brand-gold transition-colors duration-300">About</Link>
        <Link href="/inquire" className="border border-brand-gold/40 px-8 py-3 text-brand-gold hover:bg-brand-gold hover:text-brand-green transition-all duration-500">Inquire</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-brand-gold focus:outline-none p-2 flex items-center gap-3 group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
         <span className="text-[10px] tracking-widest uppercase font-bold">Menu</span>
         <div className="flex flex-col gap-1.5 items-end">
            <div className={`h-[1px] bg-brand-gold transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[3.5px]' : 'w-6'}`}></div>
            <div className={`h-[1px] bg-brand-gold transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[3.5px]' : 'w-4'}`}></div>
         </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-40 bg-brand-green flex flex-col items-center justify-center gap-12 md:hidden animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col items-center gap-12 text-sm font-semibold tracking-[0.3em] uppercase text-white/90">
            <Link href="/#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link href="/#shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/inquire" onClick={() => setIsMenuOpen(false)} className="text-brand-gold">Inquire</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
