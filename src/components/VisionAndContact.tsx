/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, CheckCircle2, ChevronRight, ArrowRight, Globe } from "lucide-react";
import { translations, Language, companyConfig } from "../translations";

export function Vision({ lang }: { lang: Language }) {
  const t = translations[lang].vision;

  return (
    <section id="vision" className="py-32 bg-white dark:bg-obsidian max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-32 items-center transition-colors duration-500">
      <div className="space-y-16">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="label-caps mb-4 block text-accent tracking-[0.2em]">{t.label}</span>
          <p className="text-4xl md:text-[52px] font-bold text-obsidian dark:text-white leading-[1.05] tracking-tight transition-colors duration-500">
            {t.tagline}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <span className="label-caps mb-4 block text-accent/60 font-black">{t.mission_label}</span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed transition-colors duration-500">
              {t.mission_text}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <span className="label-caps mb-4 block text-secondary-accent/60 font-black">{t.vision_label}</span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed transition-colors duration-500">
              {t.vision_text}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="relative h-[550px] rounded-[3rem] overflow-hidden glass-panel border border-zinc-200 dark:border-white/10 group">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover scale-110 grayscale group-hover:scale-100 group-hover:grayscale-0 transition-all duration-1000"
          alt="International Architecture"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100/80 dark:from-obsidian via-transparent to-transparent opacity-80" />
      </div>
    </section>
  );
}

export function WhyUs({ lang }: { lang: Language }) {
  const t = translations[lang].advantages;

  return (
    <section className="py-32 bg-zinc-50 dark:bg-obsidian-light border-y border-zinc-200 dark:border-white/[0.05] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1">
            <span className="label-caps mb-6 block text-accent tracking-[0.2em] font-black">{t.label}</span>
            <h2 className="text-5xl font-bold tracking-tight text-obsidian dark:text-white mb-8 leading-[1.1] transition-colors duration-500">{t.title}</h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-light max-w-sm text-lg">
              {t.text}
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {t.items.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 glass-panel rounded-3xl border border-zinc-200 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-white/[0.03] transition-all"
              >
                <span className="text-4xl font-black text-accent/10 group-hover:text-accent/30 transition-colors duration-500 mb-6 block">
                  {item.num}
                </span>
                <h4 className="text-xl font-bold text-obsidian dark:text-white mb-4">{item.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Network({ lang }: { lang: Language }) {
  const t = translations[lang].network;
  const regions = [
    "Netherlands Base", 
    "European Access", 
    "Turkish Market Connection", 
    "International Trade Network",
    "Strategic Partnerships",
    "Emerging Opportunities"
  ];

  return (
    <section id="network" className="py-32 bg-white dark:bg-obsidian relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="max-w-3xl mx-auto mb-20">
          <span className="label-caps mb-6 block text-secondary-accent tracking-[0.3em] font-black">REACH</span>
          <h2 className="text-5xl md:text-6xl font-bold text-obsidian dark:text-white mb-8 leading-tight transition-colors duration-500">{t.title}</h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-panel rounded-[2rem] border border-zinc-200 dark:border-white/5 hover:border-accent/40 transition-all group bg-zinc-50 dark:bg-white/[0.01]"
            >
              <div className="w-10 h-10 bg-zinc-100 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/10 transition-colors">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-obsidian dark:text-white font-bold text-base md:text-lg mb-2">{region}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact({ lang }: { lang: Language }) {
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    setSubmitted(true);
    
    // Mailto fallback
    const body = `
Inquiry from INCE GLOBAL Website:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

---
Sent via inceglobal.nl
    `.trim();

    const mailtoLink = `mailto:${companyConfig.email}?subject=${encodeURIComponent(data.subject as string || t.form.default_subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-32 bg-zinc-50 dark:bg-obsidian-light border-t border-zinc-200 dark:border-white/[0.1] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div className="space-y-12">
          <div>
            <span className="label-caps mb-8 block text-accent tracking-[0.3em] font-black">{t.label}</span>
            <h2 className="text-5xl md:text-7xl font-bold text-obsidian dark:text-white mb-8 leading-[1.1] transition-colors duration-500">{t.title}</h2>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md">
              {t.subtext}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ContactItem 
              icon={<Mail className="w-5 h-5 text-accent" />} 
              title={t.email}
              href={`mailto:${companyConfig.email}`}
            >
              {companyConfig.email}
            </ContactItem>
            <ContactItem 
              icon={<Phone className="w-5 h-5 text-accent" />} 
              title={t.phone}
              href={companyConfig.phoneHref}
            >
              {companyConfig.phone}
            </ContactItem>
            <div className="sm:col-span-2">
              <ContactItem icon={<MapPin className="w-5 h-5 text-accent" />} title={t.location_label}>
                {companyConfig.location}
              </ContactItem>
            </div>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-[3rem] relative overflow-hidden bg-white dark:bg-white/[0.01] border border-zinc-200 dark:border-white/10 shadow-xl dark:shadow-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[120px] pointer-events-none" />
          
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center p-8 space-y-8">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-obsidian dark:text-white mb-4">Inquiry Prepared</h3>
                <p className="text-zinc-500 dark:text-zinc-500 font-light leading-relaxed text-lg">
                  {t.form.success}
                </p>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-obsidian dark:text-white hover:text-accent dark:hover:text-accent font-black label-caps flex items-center gap-2 hover:gap-4 transition-all"
              >
                Send another <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label={t.form.name} name="name" type="text" placeholder="John Doe" required />
                <FormField label={t.form.email} name="email" type="email" placeholder="john@company.com" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label={t.form.company} name="company" type="text" placeholder="Acme Inc." />
                <FormField label={t.form.phone} name="phone" type="text" placeholder="+31..." />
              </div>
              <FormField label={t.form.subject} name="subject" type="text" placeholder={t.form.default_subject} />
              <FormField label={t.form.message} name="message" type="textarea" placeholder="..." required />
              
              <button type="submit" className="w-full bg-obsidian dark:bg-white text-white dark:text-obsidian py-6 label-caps font-black text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all rounded-full shadow-2xl flex items-center justify-center gap-3">
                {t.form.submit} <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, children, href }: { icon: React.ReactNode; title: string; children: React.ReactNode; href?: string }) {
  const Wrapper = href ? 'a' : 'div' as any;
  return (
    <Wrapper href={href} className={`flex items-start gap-6 group ${href ? 'cursor-pointer' : ''}`}>
      <div className="p-4 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl group-hover:bg-accent/10 group-hover:border-accent/30 transition-all shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-bold text-obsidian dark:text-white mb-1 group-hover:text-accent transition-colors">{title}</h4>
        <div className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed break-all">{children}</div>
      </div>
    </Wrapper>
  );
}

function FormField({ label, name, type, placeholder, required }: { label: string; name: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div className="space-y-2 flex-1">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-5 text-obsidian dark:text-white focus:ring-1 focus:ring-accent rounded-3xl h-32 text-base transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-800"
          placeholder={placeholder}
        />
      ) : (
        <input
          name={name}
          required={required}
          type={type}
          className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-5 text-obsidian dark:text-white focus:ring-1 focus:ring-accent rounded-full text-base transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-800"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
