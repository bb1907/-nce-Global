/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { Language } from "../translations";

export function NetworkPage({ lang }: { lang: Language }) {
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
              <Globe className="w-8 h-8 text-accent" />
            </div>
            <div>
              <span className="label-caps text-accent tracking-[0.3em] block mb-2">Reach</span>
              <h1 className="text-5xl font-bold text-obsidian dark:text-white tracking-tight transition-colors duration-500">International Reach</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="p-10 glass-panel rounded-[2.5rem] bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5 space-y-6">
              <Globe className="w-10 h-10 text-accent" />
              <h4 className="text-obsidian dark:text-white font-bold text-2xl">Netherlands Base</h4>
              <p className="text-zinc-500 dark:text-zinc-500 font-light leading-relaxed">Our central operations are structured around European business hubs, providing a robust foundation for international coordination and regulatory stability.</p>
            </div>
            <div className="p-10 glass-panel rounded-[2.5rem] bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5 space-y-6">
              <div className="w-10 h-10 bg-secondary-accent/20 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-secondary-accent" />
              </div>
              <h4 className="text-obsidian dark:text-white font-bold text-2xl">Global Connectivity</h4>
              <p className="text-zinc-500 dark:text-zinc-500 font-light leading-relaxed">INCE GLOBAL works with a cross-border perspective, connecting trade, technology, and project opportunities across established and emerging markets.</p>
            </div>
            <div className="md:col-span-2 p-10 glass-panel rounded-[2.5rem] bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5">
              <h4 className="text-obsidian dark:text-white font-bold text-2xl mb-6">Representative Structure</h4>
              <p className="text-zinc-500 dark:text-zinc-500 font-light leading-relaxed">Additional locations and formal representative offices are updated and announced as they are formally established in accordance with our expansion strategy.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
