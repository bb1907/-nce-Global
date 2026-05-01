/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { FileText, ShieldCheck } from "lucide-react";
import { Language } from "../translations";

export function PrivacyPage({ lang }: { lang: Language }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-obsidian">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <div>
              <span className="label-caps text-accent tracking-[0.3em] block mb-2">Legal Information</span>
              <h1 className="text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed text-lg space-y-12">
            <Section title="Data Collection & Purpose">
              <p>In accordance with GDPR-conscious standards, INCE GLOBAL B.V. collects personal data (such as name, email, company, and phone) exclusively via our inquiry form for the purpose of strategic communication and potential business engagement.</p>
              <p>This information is processed based on your explicit consent when submitting an inquiry or for legitimate interest in establishing professional partnerships.</p>
            </Section>

            <Section title="Security & Retention">
              <p>Technical and organizational measures are in place to prevent unauthorized access, loss, or disclosure of your data. We retain inquiries only as long as necessary for the specified professional purpose or to comply with legal documentation obligations.</p>
            </Section>

            <Section title="User Rights">
              <p>You maintain the right to access, rectify, or request the deletion of your personal data at any time. For such requests, please contact us at hello@inceglobal.nl.</p>
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
        <h2 className="text-white text-2xl font-bold tracking-tight m-0">{title}</h2>
      </div>
      <div className="pl-6 border-l border-white/5 space-y-4">
        {children}
      </div>
    </section>
  );
}
