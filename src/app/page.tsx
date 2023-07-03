"use client";

import { motion } from "framer-motion";

import { ContactForm, CTA, Header, LogoCloud, WhatWeOffer } from "@/components";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <WhatWeOffer />
      <LogoCloud />
      <CTA />
      <ContactForm />
    </motion.div>
  );
};

export default LandingPage;
