/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar, Hero, Footer } from "./components/Navigation";
import { About, Portfolio } from "./components/AboutAndPortfolio";
import { Vision, WhyUs, Network, Contact } from "./components/VisionAndContact";
import { Modal, ModalContent } from "./components/Modal";

export default function App() {
  const [modalType, setModalType] = useState<string | null>(null);

  const getModalTitle = (type: string) => {
    switch (type) {
      case "Privacy": return "Privacy Policy";
      case "Terms": return "Terms of Service";
      case "Compliance": return "Compliance & ESG";
      case "Offices": return "Global Offices";
      default: return "";
    }
  };

  const renderModalContent = (type: string) => {
    switch (type) {
      case "Privacy": return <ModalContent.Privacy />;
      case "Terms": return <ModalContent.Terms />;
      case "Compliance": return <ModalContent.Compliance />;
      case "Offices": return <ModalContent.Offices />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-obsidian selection:bg-accent/30 selection:text-white">
      <Navbar onOpenModal={setModalType} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Vision />
        <WhyUs />
        <Network />
        <Contact />
      </main>
      <Footer onOpenModal={setModalType} />

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
