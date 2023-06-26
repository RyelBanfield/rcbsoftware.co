import {
  ContactForm,
  CTA,
  Footer,
  Header,
  LogoCloud,
  Pricing,
  TeamSection,
  WhatWeOffer,
} from "@/components";

const LandingPage = () => {
  return (
    <>
      <Header />
      <WhatWeOffer />
      <LogoCloud />
      <CTA />
      <TeamSection />
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
};

export default LandingPage;
