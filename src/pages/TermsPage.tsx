/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Scale } from "lucide-react";
import { Language } from "../translations";

export function TermsPage({ lang }: { lang: Language }) {
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
              <Scale className="w-8 h-8 text-accent" />
            </div>
            <div>
              <span className="label-caps text-accent tracking-[0.3em] block mb-2">Institutional Framework</span>
              <h1 className="text-5xl font-bold text-obsidian dark:text-white tracking-tight">Terms of Service</h1>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-lg space-y-12 transition-colors duration-500">
            <Section title="Information Purpose">
              <p>The content on this website is provided for general informational purposes only. It does not constitute a binding offer, legal advice, or a guarantee of business outcomes.</p>
              <p>INCE GLOBAL B.V. is a business development and consultancy firm. We do not provide licensed financial advisory, asset management, or investment fund services.</p>
            </Section>

            <Section title="Liability Limitation">
              <p>While we strive for accuracy, we are not liable for errors or omissions in the website content. Any business decision made based on this information is at the user's discretion and risk.</p>
            </Section>

            <Section title="Intellectual Property">
              <p>All trademarks, logos, models, and text are the intellectual property of INCE GLOBAL B.V. Unauthorized reproduction or use is strictly prohibited.</p>
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
