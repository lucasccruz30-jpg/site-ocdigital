import { AboutSection } from "@/components/AboutSection";
import { AuthorityBlock } from "@/components/AuthorityBlock";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MonthlyServices } from "@/components/MonthlyServices";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { ValueProposition } from "@/components/ValueProposition";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValueProposition />
        <ServiceShowcase />
        <PricingSection />
        <MonthlyServices />
        <ProcessSection />
        <AuthorityBlock />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
