/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Contact } from "../components/VisionAndContact";
import { Language } from "../translations";
import { motion } from "motion/react";
import { useEffect } from "react";

interface ContactPageProps {
  lang: Language;
}

export function ContactPage({ lang }: ContactPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20" // Offset for fixed navbar
    >
      <Contact lang={lang} />
    </motion.div>
  );
}
