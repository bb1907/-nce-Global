/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Globe, Landmark, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="py-[140px] max-w-7xl mx-auto px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="grid grid-cols-12 gap-8 items-end mb-32 relative z-10">
        <div className="col-span-12 lg:col-span-12">
          <span className="label-caps mb-4 block">CORE MISSION</span>
          <h2 className="text-[56px] font-bold tracking-tight text-white max-w-3xl leading-[1.1]">The engine behind <span className="text-zinc-500">strategic innovation.</span></h2>
        </div>
        <div className="col-span-12 lg:col-span-8 mt-10">
          <p className="text-2xl text-zinc-400 font-light leading-relaxed">
            INCE GLOBAL is a global holding company focused on strategic investments and innovation-driven sectors.
            We act as a catalyst for growth, empowering industry leaders and emerging ventures.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <AboutCard
          icon={<Globe className="w-6 h-6 text-accent" />}
          title="Global Presence"
          description="Unlocking value across international markets with localized expertise and global scale."
        />
        <AboutCard
          icon={<Landmark className="w-6 h-6 text-accent" />}
          title="Strategic Investments"
          description="Deploying patient capital into high-impact sectors that define the global economy."
        />
        <AboutCard
          icon={<Lightbulb className="w-6 h-6 text-accent" />}
          title="Innovation Focus"
          description="Pioneering new technologies and business models through deliberate R&D and venture scaling."
        />
        <AboutCard
          icon={<TrendingUp className="w-6 h-6 text-accent" />}
          title="Sustainable Growth"
          description="Ensuring long-term resilience and value creation for all stakeholders and partners."
        />
      </div>
    </section>
  );
}

function AboutCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-10 glass-panel hover:bg-white/[0.04] transition-all duration-500 group rounded-2xl"
    >
      <div className="mb-8 p-3 w-fit bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-zinc-500 text-sm font-light leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section className="py-[140px] bg-obsidian-light relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-24">
          <span className="label-caps mb-4 block">SECTORS</span>
          <h2 className="text-[56px] font-bold tracking-tight text-white">Investment Portfolios</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Technology */}
          <div className="md:col-span-4 relative group overflow-hidden h-[550px] rounded-2xl glass-panel">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEE-2eDBXyPebZp82NAeW8jLCtZBzQ5hBNdcvG0Oxp0_t60fUcCu1CEtjkfAhyAAMg9J5tO4X56gwXlPy109Ol-I7ykn2oK9u--vV_YniBHK0JP0zOjXJm0vDdq6ScxB0IDigxlQ29bE2mx_xPa1LpgKjh595T_JKBvNrSyN9WYYQ3V1waSDarjK-8MphbiJ5kjzdfXcipzmVTgMwvvfg4vNaU223YHrM6V8w3Uxl5Sy8xx4rHrAhDwYHeVhTNbx521R8QgZuffbc"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-all duration-1000"
              alt="Technology"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
            <div className="absolute bottom-0 p-12 w-full">
              <span className="label-caps text-secondary-accent mb-2 block">01 / DISRUPTION</span>
              <h3 className="text-4xl font-bold mb-4">Technology</h3>
              <p className="text-zinc-400 font-light max-w-md mb-8">
                Software, AI, digital transformation, and sovereign infrastructure projects.
              </p>
              <LearnMoreLink />
            </div>
          </div>

          {/* Investment */}
          <div className="md:col-span-2 glass-panel p-12 flex flex-col justify-between h-[550px] rounded-2xl hover:bg-white/[0.04] transition-all duration-500 group">
            <div>
              <span className="label-caps mb-4 block">02 / CAPITAL</span>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-accent transition-colors">Investment</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Venture capital, startups, and cross-border strategic partnerships that redefine global markets.
              </p>
            </div>
            <LearnMoreLink />
          </div>

          {/* Real Estate */}
          <div className="md:col-span-2 glass-panel p-12 flex flex-col justify-between h-[550px] rounded-2xl hover:bg-white/[0.04] transition-all duration-500 group">
            <div>
              <span className="label-caps mb-4 block">03 / PHYSICAL</span>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-accent transition-colors">Real Estate</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                High-yield residential, commercial, and transformative development projects in key global cities.
              </p>
            </div>
            <LearnMoreLink />
          </div>

          {/* Finance */}
          <div className="md:col-span-4 relative group overflow-hidden h-[550px] rounded-2xl glass-panel">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJIzkHRUqrkWpyxqIqAapp6KfAU3vzSlh4GXQOJ6Uy2fQYJH9jiP7jDSkXIQjp8XjMEMqNTaEwZSe7E3U9hHt6Sy-6Spazlin_O-hVJZbejNRLue97uoWxITqpOQlO3-g381rYbBnZYUght9UKAAbQq1nMmiwF0bNTdGnURuRfb4RVmxI-uZaSxv_WjBdc_--o6RDZWtAZd4qt7Pggrtw--kZm_fY6TZyldnP85BOCLxtZ7LjAuPBSQc_gsM7pvQ7HV7z2bNlD2E8"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-all duration-1000"
              alt="Finance"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
            <div className="absolute bottom-0 p-12 w-full">
              <span className="label-caps text-secondary-accent mb-2 block">04 / MANAGEMENT</span>
              <h3 className="text-4xl font-bold mb-4">Finance</h3>
              <p className="text-zinc-400 font-light max-w-md mb-8">
                Global portfolio management, financial advisory, and institutional risk mitigation strategies.
              </p>
              <LearnMoreLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnMoreLink() {
  return (
    <a href="#" className="flex items-center gap-2 label-caps text-zinc-500 group-hover:text-white transition-all group-hover:gap-4">
      Learn More <ArrowRight className="w-4 h-4 text-accent" />
    </a>
  );
}
