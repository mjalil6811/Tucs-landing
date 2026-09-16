import { brand } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AllianceBar from "@/components/sections/AllianceBar";
import UseCases from "@/components/sections/UseCases";
import Vehicle from "@/components/sections/Vehicle";
import Savings from "@/components/sections/Savings";
import HowToJoin from "@/components/sections/HowToJoin";
import Cities from "@/components/sections/Cities";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/ui/SectionDivider";

/** Datos estructurados (SEO / rich results). */
function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    legalName: brand.legalName,
    url: brand.url,
    description: brand.description,
    email: brand.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address,
      addressCountry: "AR",
    },
    sameAs: [
      brand.social.instagram,
      brand.social.linkedin,
      brand.social.facebook,
    ].filter(Boolean),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main id="contenido">
        <Hero />
        <AllianceBar />
        <UseCases />
        <Vehicle />
        <SectionDivider />
        <Savings />
        <HowToJoin />
        <Cities />
        <SocialProof />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
