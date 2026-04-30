/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone } from "lucide-react";

export function Vision() {
  return (
    <section className="py-[140px] max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
      <div className="space-y-16">
        <div>
          <span className="label-caps mb-4 block">OUR VISION</span>
          <p className="text-[52px] font-bold text-white leading-[1.05] tracking-tight">
            To lead global <span className="text-secondary-accent">innovation</span> through diversified excellence.
          </p>
        </div>
        <div>
          <span className="label-caps mb-4 block text-accent">OUR MISSION</span>
          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
            To create sustainable value through strategic investments, technology integration, and enduring institutional partnerships across continents.
          </p>
        </div>
      </div>
      <div className="relative h-[650px] rounded-2xl overflow-hidden glass-panel border border-white/10 group">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeJdS7RcmeV4Q4oQkmrAUl0W6dwb_84XWE_40y0J-8o-fq_365hZibhKT_nBOpiN0nPyRYmVckNX92eTGgaXZ_2ErNW1sEBY-Vfli0TB3kbwlJYZs5WtFb7Wz4j4TyjNnDBxtUkLhAiOXmAo9lsyls1XwWlN-eGuWLP4maWNrgAo51vBsmv8NivGlslxwYd5RlK1L4IErbM2QfGsWKPlS6e0s3GHC4iuTeqECtAMmpR9RPkMzNc9ZGYa8r5QPr6ZHrpqMZD2dj2N0"
          className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-all duration-1000"
          alt="Visionary Architecture"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
}

export function WhyUs() {
  const advantages = [
    { num: "01", title: "Multi-sector expertise", desc: "Deep vertical knowledge across finance, tech, and hard assets." },
    { num: "02", title: "Strong foundation", desc: "A robust financial core backed by institutional-grade governance." },
    { num: "03", title: "Innovation-driven", desc: "Utilizing AI and data analytics to optimize portfolio performance." },
    { num: "04", title: "Global mindset", desc: "A borderless approach to opportunity and value capture." },
  ];

  return (
    <section className="py-[140px] bg-obsidian-light border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1">
            <span className="label-caps mb-4 block">ADVANTAGE</span>
            <h2 className="text-[52px] font-bold tracking-tight text-white mb-8 leading-none">Why Partner <br />With Us</h2>
            <p className="text-zinc-500 font-light max-w-sm">
              We provide a unique combination of institutional rigor and venture agility.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {advantages.map((adv) => (
              <div key={adv.num} className="group">
                <span className="text-4xl font-bold text-accent/20 group-hover:text-accent transition-colors duration-500 mb-6 block font-display">
                  {adv.num}
                </span>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">{adv.title}</h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Network() {
  const brands = ["NEXUS", "PRISM", "ORBIT", "ZENITH", "VORTEX"];
  return (
    <section className="py-[140px] max-w-7xl mx-auto px-8 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/3 blur-[120px] rounded-full pointer-events-none" />
      <h2 className="text-4xl font-bold text-white mb-8 relative z-10">Global Network</h2>
      <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto mb-20 relative z-10">
        We collaborate with global partners to scale impact and unlock new opportunities across established and emerging markets.
      </p>
      <div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 relative z-10">
        {brands.map((brand) => (
          <span key={brand} className="text-2xl font-bold tracking-[0.3em] text-white/50 hover:text-white transition-colors cursor-default">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="py-[140px] bg-obsidian border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <span className="label-caps mb-6 block">GET IN TOUCH</span>
          <h2 className="text-[56px] font-bold text-white mb-12 leading-[1.1]">Let's build the <br /><span className="text-secondary-accent">future</span> together.</h2>
          
          <div className="space-y-10">
            <ContactItem icon={<MapPin className="text-accent" />} title="Amsterdam Office">
              Herengracht 450, 1017 CA<br />Amsterdam, Netherlands
            </ContactItem>
            <ContactItem icon={<Mail className="text-accent" />} title="Email Us">
              hello@inceglobal.nl
            </ContactItem>
            <ContactItem icon={<Phone className="text-accent" />} title="Call Us">
              +31 6 39260208
            </ContactItem>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all" />
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Full Name" type="text" placeholder="John Doe" />
              <FormField label="Email Address" type="email" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Subject</label>
              <select className="w-full bg-white/[0.03] border border-white/5 p-4 text-white focus:ring-1 focus:ring-accent rounded-xl transition-all appearance-none cursor-pointer text-sm">
                <option>Investment Inquiry</option>
                <option>Partnership Proposal</option>
                <option>Media & Press</option>
              </select>
            </div>
            <FormField label="Message" type="textarea" placeholder="Tell us about your project..." />
            <button className="w-full bg-white text-obsidian py-5 label-caps text-[12px] font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.98] transition-all rounded-xl">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">{icon}</div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">{title}</h4>
        <div className="text-zinc-500 text-sm font-light leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function FormField({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="space-y-2 flex-1">
      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="w-full bg-white/[0.03] border border-white/5 p-4 text-white focus:ring-1 focus:ring-accent rounded-xl h-32 text-sm placeholder:text-zinc-700"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="w-full bg-white/[0.03] border border-white/5 p-4 text-white focus:ring-1 focus:ring-accent rounded-xl text-sm placeholder:text-zinc-700"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

