/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { Language } from "../translations";

export function CompliancePage({ lang }: { lang: Language }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-obsidian transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <div>
              <span className="label-caps text-accent tracking-[0.3em] block mb-2">Ethics & Integrity</span>
              <h1 className="text-5xl font-bold text-obsidian dark:text-white tracking-tight">Ethical Compliance</h1>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-lg space-y-12 transition-colors duration-500">
            <Section title="Ethical Business Conduct">
              <p>INCE GLOBAL B.V. is committed to integrity, transparency, and the highest ethical standards. We strictly prohibit bribery, corruption, and any form of unethical commercial engagement.</p>
            </Section>

            <Section title="Trade & Regulatory Compliance">
              <p>We operate in full compliance with European and international trade regulations, including relevant sanctions and anti-money laundering (AML) awareness protocols.</p>
            </Section>

            <Section title="Relationship Integrity">
              <p>Our partnerships are built on mutual respect and shared compliance standards. We perform necessary due diligence on sourcing, trade partners, and strategic collaborators to ensure long-term stability.</p>
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        <h2 className="text-obsidian dark:text-white text-2xl font-bold tracking-tight m-0">{title}</h2>
      </div>
      <div className="pl-6 border-l border-zinc-200 dark:border-white/5 space-y-4">
        {children}
      </div>
    </section>
  );
}
