/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Navbar({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/40 backdrop-blur-md border-b border-white/[0.05]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-tr from-accent to-secondary-accent rounded-sm" />
          INCE GLOBAL
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <NavLink href="#hero" active>About</NavLink>
          <NavLink href="#">Business Areas</NavLink>
          <NavLink href="#">Vision</NavLink>
          <NavLink href="#">Network</NavLink>
          <NavLink href="#">Contact</NavLink>
        </div>
        <button className="bg-white text-obsidian px-6 py-2 label-caps font-bold hover:bg-white/90 transition-all active:scale-95 rounded-full text-[10px]">
          Inquire
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a
      href={href}
      className={`font-sans uppercase tracking-[0.2em] text-[9px] font-bold transition-all hover:text-white ${
        active ? "text-accent" : "text-zinc-500"
      }`}
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden tech-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary-accent/5 blur-[130px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="label-caps mb-6 block drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">GLOBAL INSTITUTIONAL EXCELLENCE</span>
          <h1 className="text-[6vw] leading-[1] font-bold tracking-tight mb-8">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary-accent animate-gradient">Future</span> <br />
            of Investments
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl">
            INCE GLOBAL B.V. operates across technology, investment, real estate, and finance,
            delivering sustainable growth and long-term value through strategic capital allocation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-accent text-white px-10 py-5 label-caps font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all rounded-full group flex items-center gap-2">
              Explore Our Business <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/10 text-white px-10 py-5 label-caps font-bold hover:bg-white/5 transition-all rounded-full">
              Strategy Overview
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  return (
    <footer className="bg-obsidian border-t border-white/[0.05] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <div className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-tr from-accent to-secondary-accent rounded-sm" />
          INCE GLOBAL
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <FooterButton onClick={() => onOpenModal("Privacy")}>Privacy Policy</FooterButton>
          <FooterButton onClick={() => onOpenModal("Terms")}>Terms of Service</FooterButton>
          <FooterButton onClick={() => onOpenModal("Compliance")}>Compliance</FooterButton>
          <FooterButton onClick={() => onOpenModal("Offices")}>Global Offices</FooterButton>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
          © 2024 INCE GLOBAL. Powered by Innovation.
        </div>
      </div>
    </footer>
  );
}

function FooterButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="text-xs text-zinc-500 hover:text-white transition-colors uppercase tracking-widest font-bold">
      {children}
    </button>
  );
}
