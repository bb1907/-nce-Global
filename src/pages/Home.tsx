/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Navigation";
import { About, Portfolio } from "../components/AboutAndPortfolio";
import { Vision, WhyUs, Network } from "../components/VisionAndContact";
import { Language } from "../translations";

interface HomeProps {
  lang: Language;
}

export function Home({ lang }: HomeProps) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <Portfolio lang={lang} />
      <Vision lang={lang} />
      <WhyUs lang={lang} />
      <Network lang={lang} />
    </>
  );
}
