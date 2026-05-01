/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Globe, ChevronDown, Sun, Moon } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { translations, Language, companyConfig } from "../translations";
import { Logo } from "./Logo";

export function Navbar({ lang, setLang, theme, setTheme }: { lang: Language; setLang: (l: Language) => void; theme: 'dark' | 'light', setTheme: (t: 'dark' | 'light') => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();
  const languages: Language[] = ['EN', 'NL', 'TR', 'ES'];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    if (location.pathname !== '/') {
      navigate('/' + id);
      return;
    }
    
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavContent = () => (
    <>
      <NavLink href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>{t.about}</NavLink>
      <NavLink href="#business" onClick={(e) => scrollToSection(e, '#business')}>{t.business}</NavLink>
      <NavLink href="#vision" onClick={(e) => scrollToSection(e, '#vision')}>{t.vision}</NavLink>
      <NavLink href="#network" onClick={(e) => scrollToSection(e, '#network')}>{t.network}</NavLink>
      <Link 
        to="/contact" 
        className={`font-sans uppercase tracking-[0.2em] text-[10px] font-black transition-all ${
          location.pathname === '/contact' ? 'text-accent' : 'text-zinc-500 hover:text-obsidian dark:hover:text-white'
        }`}
      >
        {t.contact}
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 dark:bg-obsidian/60 backdrop-blur-md border-b border-zinc-200 dark:border-white/[0.05] transition-colors duration-500">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="text-xl font-bold tracking-tighter text-obsidian dark:text-white flex items-center gap-3 cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="w-8 h-8" />
          <span className="hidden sm:inline">INCE GLOBAL</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavContent />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-all"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <LanguageSelector lang={lang} setLang={setLang} />
          <button 
            onClick={() => navigate('/contact')}
            className="bg-obsidian dark:bg-white text-white dark:text-obsidian px-6 py-2.5 label-caps font-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 rounded-full text-[10px]"
          >
            {t.inquire}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-obsidian dark:text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            className="md:hidden bg-white dark:bg-obsidian border-b border-zinc-200 dark:border-white/10 absolute top-20 left-0 w-full overflow-hidden shadow-2xl transition-colors duration-500"
          >
            <div className="flex flex-col p-8 space-y-8">
              <div className="flex flex-col space-y-6">
                <MobileNavLink href="#hero" onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, '#hero'); }}>{t.about}</MobileNavLink>
                <MobileNavLink href="#business" onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, '#business'); }}>{t.business}</MobileNavLink>
                <MobileNavLink href="#vision" onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, '#vision'); }}>{t.vision}</MobileNavLink>
                <MobileNavLink href="#network" onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, '#network'); }}>{t.network}</MobileNavLink>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-obsidian dark:text-white hover:text-accent transition-colors"
                >
                  {t.contact}
                </Link>
              </div>
              
              <div className="pt-8 border-t border-zinc-100 dark:border-white/5 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase ml-4">Select Language</span>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setIsMobileMenuOpen(false); }}
                        className={`flex-1 text-[10px] font-black tracking-widest py-4 rounded-2xl transition-all border ${
                          lang === l ? "bg-accent text-white border-accent shadow-lg shadow-accent/20" : "bg-zinc-50 dark:bg-white/5 text-zinc-500 border-zinc-200 dark:border-white/5"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase ml-4">Theme</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { setTheme('light'); setIsMobileMenuOpen(false); }}
                      className={`flex items-center justify-center gap-2 text-[10px] font-black tracking-widest py-4 rounded-2xl transition-all border ${
                        theme === 'light' ? "bg-accent text-white border-accent shadow-lg shadow-accent/20" : "bg-zinc-50 dark:bg-white/5 text-zinc-500 border-zinc-200 dark:border-white/5"
                      }`}
                    >
                      <Sun size={12} /> LIGHT
                    </button>
                    <button
                      onClick={() => { setTheme('dark'); setIsMobileMenuOpen(false); }}
                      className={`flex items-center justify-center gap-2 text-[10px] font-black tracking-widest py-4 rounded-2xl transition-all border ${
                        theme === 'dark' ? "bg-accent text-white border-accent shadow-lg shadow-accent/20" : "bg-zinc-50 dark:bg-white/5 text-zinc-500 border-zinc-200 dark:border-white/5"
                      }`}
                    >
                      <Moon size={12} /> DARK
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => { setIsMobileMenuOpen(false); navigate('/contact'); }}
                  className="w-full bg-obsidian dark:bg-white text-white dark:text-obsidian py-5 label-caps font-black rounded-full"
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

function LanguageSelector({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const languages: Language[] = ['EN', 'NL', 'TR', 'ES'];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-2.5 px-5 py-2.5 bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5 rounded-full text-[10px] font-black tracking-widest text-zinc-600 dark:text-zinc-300 hover:text-obsidian dark:hover:text-white transition-all hover:bg-zinc-200 dark:hover:bg-white/5 select-none"
      >
        <Globe size={12} className="text-accent" />
        {lang}
        <ChevronDown size={12} className={`transition-transform duration-500 ease-out ${isOpen ? 'rotate-180 translate-y-px' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-3 w-36 bg-white dark:bg-obsidian/95 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100]"
          >
            <div className="p-2 flex flex-col gap-1">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsOpen(false); }}
                  className={`text-[10px] font-black tracking-widest px-4 py-3.5 rounded-xl transition-all text-left flex items-center justify-between ${
                    lang === l ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-zinc-400 dark:text-zinc-500 hover:bg-zinc-50 dark:hover:bg-white/5 hover:text-obsidian dark:hover:text-white"
                  }`}
                >
                  {l}
                  {lang === l && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: (e: React.MouseEvent) => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-sans uppercase tracking-[0.2em] text-[10px] font-black transition-all text-zinc-500 hover:text-obsidian dark:hover:text-white"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: (e: React.MouseEvent) => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-2xl font-bold text-obsidian dark:text-white hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}

export function Hero({ lang }: { lang: Language }) {
  const t = translations[lang].hero;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-obsidian transition-colors duration-500">
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
          <h1 className="text-6xl md:text-[6vw] font-bold tracking-tight mb-10 leading-[1.05] text-obsidian dark:text-white">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={word === "Global" || word === "Küresel" || word === "Wereldwijde" || word === "Globales" || word === "Business" || word === "İş" || word === "Zakelijke" || word === "Negocio" ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-14 max-w-2xl">
            {t.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-obsidian dark:bg-white text-white dark:text-obsidian px-10 py-6 label-caps font-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all rounded-full group flex items-center justify-center gap-3 shadow-2xl"
            >
              {t.cta_primary} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/#business');
                } else {
                  document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border border-zinc-200 dark:border-white/20 text-obsidian dark:text-white px-10 py-6 label-caps font-black hover:bg-zinc-50 dark:hover:bg-white/5 transition-all rounded-full flex items-center justify-center"
            >
              {t.cta_secondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <footer className="bg-zinc-50 dark:bg-obsidian-light border-t border-zinc-200 dark:border-white/[0.05] py-24 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
        <div className="md:col-span-2 space-y-10">
          <div className="text-xl font-bold text-obsidian dark:text-white tracking-tight flex items-center gap-3">
            <Logo className="w-7 h-7" />
            INCE GLOBAL
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md font-light leading-relaxed text-lg">
            {t.footer.desc}
          </p>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${companyConfig.email}`} className="text-obsidian dark:text-white font-medium hover:text-accent transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full" /> {companyConfig.email}
            </a>
            <a href={companyConfig.phoneHref} className="text-obsidian dark:text-white font-medium hover:text-accent transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-secondary-accent rounded-full" /> {companyConfig.phone}
            </a>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 className="label-caps text-zinc-400 dark:text-zinc-300 text-[10px]">{t.nav.about}</h4>
          <div className="flex flex-col gap-4">
            <Link to="/#hero" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">{t.nav.about}</Link>
            <Link to="/#business" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">{t.nav.business}</Link>
            <Link to="/#vision" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">{t.nav.vision}</Link>
            <Link to="/#network" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">{t.nav.network}</Link>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="label-caps text-zinc-400 dark:text-zinc-300 text-[10px]">Information</h4>
          <div className="flex flex-col gap-4">
            <Link to="/privacy" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">Privacy Policy</Link>
            <Link to="/terms" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">Terms of Service</Link>
            <Link to="/compliance" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">Compliance</Link>
            <Link to="/network" className="text-zinc-500 dark:text-zinc-400 hover:text-obsidian dark:hover:text-white transition-colors text-sm font-medium">{t.footer.compliance}</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-12 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 font-black">
          © {companyConfig.year} {companyConfig.fullName}. All rights reserved.
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-black">
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
