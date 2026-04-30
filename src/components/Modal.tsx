/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, Scale, FileText, Globe } from "lucide-react";

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
            className="absolute inset-0 bg-obsidian/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden glass-panel rounded-[2.5rem] flex flex-col border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/[0.05] flex justify-between items-center bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all text-zinc-500 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-10 overflow-y-auto custom-scrollbar bg-obsidian/40 flex-1">
              <div className="prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed text-lg">
                {children}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/[0.05] bg-white/[0.01] flex justify-center">
              <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black">
                INCE GLOBAL B.V. Institutional Framework
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const Section = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <section className="mb-12 last:mb-0">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
      <h4 className="text-white text-xl font-bold tracking-tight m-0">{title}</h4>
    </div>
    <div className="pl-6 border-l border-white/5 space-y-4">
      {children}
    </div>
  </section>
);

export const ModalContent = {
  Privacy: () => (
    <div>
      <Section icon={FileText} title="Data Collection & Purpose">
        <p>In accordance with GDPR-conscious standards, INCE GLOBAL B.V. collects personal data (such as name, email, company, and phone) exclusively via our inquiry form for the purpose of strategic communication and potential business engagement.</p>
        <p>This information is processed based on your explicit consent when submitting an inquiry or for legitimate interest in establishing professional partnerships.</p>
      </Section>
      <Section icon={FileText} title="Security & Retention">
        <p>Technical and organizational measures are in place to prevent unauthorized access, loss, or disclosure of your data. We retain inquiries only as long as necessary for the specified professional purpose or to comply with legal documentation obligations.</p>
      </Section>
      <Section icon={FileText} title="User Rights">
        <p>You maintain the right to access, rectify, or request the deletion of your personal data at any time. For such requests, please contact us at hello@inceglobal.nl.</p>
      </Section>
    </div>
  ),
  Terms: () => (
    <div>
      <Section icon={Scale} title="Information Purpose">
        <p>The content on this website is provided for general informational purposes only. It does not constitute a binding offer, legal advice, or a guarantee of business outcomes.</p>
        <p>INCE GLOBAL B.V. is a business development and consultancy firm. We do not provide licensed financial advisory, asset management, or investment fund services.</p>
      </Section>
      <Section icon={Scale} title="Liability Limitation">
        <p>While we strive for accuracy, we are not liable for errors or omissions in the website content. Any business decision made based on this information is at the user's discretion and risk.</p>
      </Section>
      <Section icon={Scale} title="Intellectual Property">
        <p>All trademarks, logos, models, and text are the intellectual property of INCE GLOBAL B.V. Unauthorized reproduction or use is strictly prohibited.</p>
      </Section>
    </div>
  ),
  Compliance: () => (
    <div>
      <Section icon={ShieldCheck} title="Ethical Business Conduct">
        <p>INCE GLOBAL B.V. is committed to integrity, transparency, and the highest ethical standards. We strictly prohibit bribery, corruption, and any form of unethical commercial engagement.</p>
      </Section>
      <Section icon={ShieldCheck} title="Trade & Regulatory Compliance">
        <p>We operate in full compliance with European and international trade regulations, including relevant sanctions and anti-money laundering (AML) awareness protocols.</p>
      </Section>
      <Section icon={ShieldCheck} title="Relationship Integrity">
        <p>Our partnerships are built on mutual respect and shared compliance standards. We perform necessary due diligence on sourcing, trade partners, and strategic collaborators to ensure long-term stability.</p>
      </Section>
    </div>
  ),
  Network: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-8 glass-panel rounded-3xl bg-white/[0.03] border border-white/5">
        <Globe className="w-8 h-8 text-accent mb-4" />
        <h4 className="text-white font-bold text-xl mb-2">Netherlands Base</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">Our central operations are structured around European business hubs, providing a robust foundation for international coordination.</p>
      </div>
      <div className="p-8 glass-panel rounded-3xl bg-white/[0.03] border border-white/5">
        <Globe className="w-8 h-8 text-secondary-accent mb-4" />
        <h4 className="text-white font-bold text-xl mb-2">Global Connectivity</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">INCE GLOBAL works with a cross-border perspective, connecting trade, technology, and project opportunities across established and emerging markets.</p>
      </div>
      <div className="md:col-span-2 p-8 glass-panel rounded-3xl bg-white/[0.03] border border-white/5">
        <h4 className="text-white font-bold text-xl mb-4">Representative Structure</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">Additional locations and formal representative offices are updated and announced as they are formally established in accordance with our expansion strategy.</p>
      </div>
    </div>
  )
};
