/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Globe, Lightbulb, Workflow, Building, ShoppingCart, Briefcase, MoveUpRight } from "lucide-react";
import { translations, Language } from "../translations";

export function About({ lang }: { lang: Language }) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-32 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <span className="label-caps tracking-[0.3em] text-accent font-black">{t.label}</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">{t.title}</h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
            {t.text}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-panel rounded-[2.5rem] hover:bg-white/[0.03] transition-all group border border-white/5 hover:border-white/10"
            >
              <div className="w-1 h-8 bg-accent/20 mb-6 group-hover:bg-accent transition-colors rounded-full" />
              <h3 className="text-white font-bold mb-4 text-xl group-hover:text-accent transition-colors">{card.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio({ lang }: { lang: Language }) {
  const t = translations[lang].business;

  const areas = [
    { key: 'trade', icon: <Globe className="w-6 h-6 text-accent" /> },
    { key: 'consultancy', icon: <Lightbulb className="w-6 h-6 text-accent" /> },
    { key: 'tech', icon: <Workflow className="w-6 h-6 text-accent" /> },
    { key: 'construction', icon: <Building className="w-6 h-6 text-accent" /> },
    { key: 'procurement', icon: <ShoppingCart className="w-6 h-6 text-accent" /> },
    { key: 'ma', icon: <Briefcase className="w-6 h-6 text-accent" /> },
  ];

  return (
    <section id="business" className="py-32 bg-obsidian-light relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center lg:text-left">
          <span className="label-caps mb-6 block text-secondary-accent tracking-[0.3em] font-black">{t.label}</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => {
            const data = (t as any)[area.key];
            if (!data) return null;
            return (
              <div key={area.key}>
                <PortfolioCard
                  num={data.label}
                  title={data.title}
                  desc={data.desc}
                  icon={area.icon}
                  lang={lang}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ num, title, desc, icon, lang }: { num: string; title: string; desc: string; icon: React.ReactNode; lang: Language }) {
  const t = translations[lang].business;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative h-[400px] overflow-hidden glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-white/[0.04] transition-all border border-white/5 hover:border-accent/20"
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-all border border-white/5">
            {icon}
          </div>
          <span className="text-[10px] font-black tracking-[0.2em] text-zinc-500">{num}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-accent group-hover:translate-x-1 transition-all">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed font-light">{desc}</p>
      </div>
      <div className="relative z-10 flex items-center gap-2 text-accent text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all cursor-pointer">
        {t.learnMore} <MoveUpRight className="w-3 h-3" />
      </div>
      
      {/* Visual Accents */}
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-all" />
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover:scale-x-full transition-transform duration-500" />
    </motion.div>
  );
}
