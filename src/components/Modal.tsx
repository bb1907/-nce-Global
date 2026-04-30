/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden glass-panel rounded-3xl flex flex-col border-white/10"
          >
            <div className="p-8 border-b border-white/[0.05] flex justify-between items-center bg-white/[0.02]">
              <h2 className="text-3xl font-bold text-white tracking-tight font-display">{title}</h2>
              <button 
                onClick={onClose}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all text-zinc-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto custom-scrollbar bg-obsidian">
              <div className="prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed text-lg">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export const ModalContent = {
  Privacy: () => (
    <div className="space-y-8">
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full" /> 1. Data Collection
        </h4>
        <p>At INCE GLOBAL, we prioritize the security and confidentiality of your data. We collect information only necessary to provide our premium investment and consulting services.</p>
      </section>
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full" /> 2. Usage of Information
        </h4>
        <p>Your information is used strictly for internal institutional purposes, strategic communication, and compliance with global financial regulations.</p>
      </section>
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full" /> 3. Third-Party Sharing
        </h4>
        <p>We do not sell or trade your personal data. Sharing only occurs with trusted partners under strict non-disclosure agreements for the purpose of executing investment strategies.</p>
      </section>
    </div>
  ),
  Terms: () => (
    <div className="space-y-8">
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-secondary-accent rounded-full" /> 1. General Terms
        </h4>
        <p>By accessing the services of INCE GLOBAL, you agree to be bound by these terms of service and all applicable institutional laws and regulations.</p>
      </section>
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-secondary-accent rounded-full" /> 2. Investment Risks
        </h4>
        <p>All investments carry inherent risks. Past performance is not indicative of future results. Clients are advised to seek independent financial counsel before committing capital.</p>
      </section>
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-secondary-accent rounded-full" /> 3. Intellectual Property
        </h4>
        <p>All content, analysis models, and strategic frameworks presented are the protected intellectual property of INCE GLOBAL.</p>
      </section>
    </div>
  ),
  Compliance: () => (
    <div className="space-y-8">
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full" /> 1. Regulatory Framework
        </h4>
        <p>INCE GLOBAL operates under the strict regulatory oversight of European financial authorities, ensuring the highest level of institutional integrity.</p>
      </section>
      <section>
        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full" /> 2. AML & KYC
        </h4>
        <p>We implement rigorous Anti-Money Laundering (AML) and Know Your Customer (KYC) protocols to maintain a transparent and secure investment environment.</p>
      </section>
    </div>
  ),
  Offices: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-8 glass-panel rounded-2xl bg-white/[0.03]">
        <h4 className="text-secondary-accent font-bold mb-2 text-lg">Amsterdam (HQ)</h4>
        <p className="text-white">Herengracht 450, 1017 CA</p>
        <p className="text-zinc-500">Amsterdam, Netherlands</p>
      </div>
      <div className="p-8 glass-panel rounded-2xl bg-white/[0.03]">
        <h4 className="text-secondary-accent font-bold mb-2 text-lg">London</h4>
        <p className="text-white">Mayfair Place, W1J 8AJ</p>
        <p className="text-zinc-500">London, United Kingdom</p>
      </div>
      <div className="p-8 glass-panel rounded-2xl bg-white/[0.03]">
        <h4 className="text-secondary-accent font-bold mb-2 text-lg">Dubai</h4>
        <p className="text-white">Fintech Tower, DIFC</p>
        <p className="text-zinc-500">Dubai, UAE</p>
      </div>
      <div className="p-8 glass-panel rounded-2xl bg-white/[0.03]">
        <h4 className="text-secondary-accent font-bold mb-2 text-lg">Singapore</h4>
        <p className="text-white">Marina Bay Financial Centre</p>
        <p className="text-zinc-500">Singapore 018981</p>
      </div>
    </div>
  )
};
