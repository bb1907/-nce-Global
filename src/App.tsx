/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/Navigation";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { CompliancePage } from "./pages/CompliancePage";
import { NetworkPage } from "./pages/NetworkPage";
import { translations, Language } from "./translations";

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ince-lang');
    return (saved as Language) || 'EN';
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('ince-theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('ince-lang', lang);
    document.title = "INCE GLOBAL | International Business, Trade & Consultancy";
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('ince-theme', theme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-obsidian selection:bg-accent/30 selection:text-white antialiased transition-colors duration-500">
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
            <Route path="/privacy" element={<PrivacyPage lang={lang} />} />
            <Route path="/terms" element={<TermsPage lang={lang} />} />
            <Route path="/compliance" element={<CompliancePage lang={lang} />} />
            <Route path="/network" element={<NetworkPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}
