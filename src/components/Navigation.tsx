/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { translations, Language, companyConfig } from "../translations";
import { Logo } from "./Logo";

export function Navbar({ lang, setLang, onOpenModal }: { lang: Language; setLang: (l: Language) => void; onOpenModal: (type: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;
  const languages: Language[] = ['EN', 'NL', 'TR', 'ES'];

  const NavContent = () => (
    <>
      <NavLink href="#hero">{t.about}</NavLink>
      <NavLink href="#business">{t.business}</NavLink>
      <NavLink href="#vision">{t.vision}</NavLink>
      <NavLink href="#network">{t.network}</NavLink>
      <NavLink href="#contact">{t.contact}</NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/60 backdrop-blur-md border-b border-white/[0.05]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-3 cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="w-8 h-8" />
          <span className="hidden sm:inline">INCE GLOBAL</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavContent />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/5 rounded-full">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full transition-all ${
                  lang === l ? "bg-accent text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-obsidian px-6 py-2.5 label-caps font-black hover:bg-zinc-200 transition-all active:scale-95 rounded-full text-[10px]"
          >
            {t.inquire}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-obsidian border-b border-white/10 absolute top-20 left-0 w-full overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-8">
              <div className="flex flex-col space-y-6">
                <MobileNavLink href="#hero" onClick={() => setIsMobileMenuOpen(false)}>{t.about}</MobileNavLink>
                <MobileNavLink href="#business" onClick={() => setIsMobileMenuOpen(false)}>{t.business}</MobileNavLink>
                <MobileNavLink href="#vision" onClick={() => setIsMobileMenuOpen(false)}>{t.vision}</MobileNavLink>
                <MobileNavLink href="#network" onClick={() => setIsMobileMenuOpen(false)}>{t.network}</MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</MobileNavLink>
              </div>
              
              <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsMobileMenuOpen(false); }}
                      className={`flex-1 text-[10px] font-black tracking-widest py-3 rounded-xl transition-all ${
                        lang === l ? "bg-accent text-white" : "bg-white/5 text-zinc-500"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="w-full bg-white text-obsidian py-5 label-caps font-black rounded-full"
                >
                  {t.inquire}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-sans uppercase tracking-[0.2em] text-[10px] font-black transition-all text-zinc-500 hover:text-white"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-2xl font-bold text-white hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}

export function Hero({ lang }: { lang: Language }) {
  const t = translations[lang].hero;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-obsidian">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-accent/5 blur-[150px] rounded-full" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="label-caps mb-8 block text-accent tracking-[0.3em] font-black drop-shadow-sm">
            {t.eyebrow}
          </span>
          <h1 className="text-6xl md:text-[6vw] font-bold tracking-tight mb-10 leading-[1.05] text-white">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={word === "Global" || word === "Küresel" || word === "Wereldwijde" || word === "Globales" || word === "Business" || word === "İş" || word === "Zakelijke" || word === "Negocio" ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-14 max-w-2xl">
            {t.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-obsidian px-10 py-6 label-caps font-black hover:bg-zinc-200 transition-all rounded-full group flex items-center justify-center gap-3 shadow-2xl"
            >
              {t.cta_primary} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/20 text-white px-10 py-6 label-caps font-black hover:bg-white/5 transition-all rounded-full flex items-center justify-center"
            >
              {t.cta_secondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer({ lang, onOpenModal }: { lang: Language; onOpenModal: (type: string) => void }) {
  const t = translations[lang];

  return (
    <footer className="bg-obsidian-light border-t border-white/[0.05] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
        <div className="md:col-span-2 space-y-10">
          <div className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
            <Logo className="w-7 h-7" />
            INCE GLOBAL
          </div>
          <p className="text-zinc-500 max-w-md font-light leading-relaxed text-lg">
            {t.footer.desc}
          </p>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${companyConfig.email}`} className="text-white font-medium hover:text-accent transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full" /> {companyConfig.email}
            </a>
            <a href={companyConfig.phoneHref} className="text-white font-medium hover:text-accent transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-secondary-accent rounded-full" /> {companyConfig.phone}
            </a>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 className="label-caps text-zinc-300 text-[10px]">{t.nav.about}</h4>
          <div className="flex flex-col gap-4">
            <FooterNavLink href="#hero">{t.nav.about}</FooterNavLink>
            <FooterNavLink href="#business">{t.nav.business}</FooterNavLink>
            <FooterNavLink href="#vision">{t.nav.vision}</FooterNavLink>
            <FooterNavLink href="#network">{t.nav.network}</FooterNavLink>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="label-caps text-zinc-300 text-[10px]">Information</h4>
          <div className="flex flex-col gap-4">
            <FooterButton onClick={() => onOpenModal("Privacy")}>Privacy Policy</FooterButton>
            <FooterButton onClick={() => onOpenModal("Terms")}>Terms of Service</FooterButton>
            <FooterButton onClick={() => onOpenModal("Compliance")}>Compliance</FooterButton>
            <FooterButton onClick={() => onOpenModal("Network")}>{t.footer.compliance}</FooterButton>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black">
          © {companyConfig.year} {companyConfig.name}. All rights reserved.
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-black">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

function FooterNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
      {children}
    </a>
  );
}

function FooterButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="text-zinc-500 hover:text-white transition-colors text-sm text-left font-medium">
      {children}
    </button>
  );
}
