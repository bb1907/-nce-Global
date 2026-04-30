/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar, Hero, Footer } from "./components/Navigation";
import { About, Portfolio } from "./components/AboutAndPortfolio";
import { Vision, WhyUs, Network, Contact } from "./components/VisionAndContact";
import { Modal, ModalContent } from "./components/Modal";
import { translations, Language } from "./translations";

export default function App() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ince-lang');
    return (saved as Language) || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('ince-lang', lang);
    document.title = "INCE GLOBAL | International Business, Trade & Consultancy";
  }, [lang]);

  const getModalTitle = (type: string) => {
    switch (type) {
      case "Privacy": return "Privacy Policy";
      case "Terms": return "Terms of Service";
      case "Compliance": return "Ethical Compliance";
      case "Network": return "International Reach";
      default: return "";
    }
  };

  const renderModalContent = (type: string) => {
    switch (type) {
      case "Privacy": return <ModalContent.Privacy />;
      case "Terms": return <ModalContent.Terms />;
      case "Compliance": return <ModalContent.Compliance />;
      case "Network": return <ModalContent.Network />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-obsidian selection:bg-accent/30 selection:text-white antialiased">
      <Navbar lang={lang} setLang={setLang} onOpenModal={setModalType} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Portfolio lang={lang} />
        <Vision lang={lang} />
        <WhyUs lang={lang} />
        <Network lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} onOpenModal={setModalType} />

      <Modal 
        isOpen={!!modalType} 
        onClose={() => setModalType(null)} 
        title={modalType ? getModalTitle(modalType) : ""}
      >
        {modalType && renderModalContent(modalType)}
      </Modal>
    </div>
  );
}
