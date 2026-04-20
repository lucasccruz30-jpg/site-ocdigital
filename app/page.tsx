import { AboutSection } from "@/components/AboutSection";
import { AuthorityReasonsSection } from "@/components/AuthorityReasonsSection";
import { ContactSection } from "@/components/ContactSection";
import { ConversionStrip } from "@/components/ConversionStrip";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MonthlyServices } from "@/components/MonthlyServices";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ValueProposition } from "@/components/ValueProposition";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <AuthorityReasonsSection />
        <AboutSection />
        <ValueProposition />
        <ConversionStrip
          eyebrow="Agenda limitada para novos projetos"
          title="Solicite uma análise inicial"
          text="Receba uma leitura objetiva sobre a melhor estrutura para posicionar sua empresa com mais autoridade no digital."
          cta="Falar pelo WhatsApp"
        />
        <ServiceShowcase />
        <PortfolioSection />
        <ConversionStrip
          eyebrow="Solicite análise inicial"
          title="Vamos modernizar sua presença digital"
          text="Se sua empresa já entrega bem, o site precisa transmitir esse mesmo nível antes da conversa começar."
          cta="Quero uma análise"
          tone="light"
        />
        <MonthlyServices />
        <ProcessSection />
        <TestimonialsSection />
        <ConversionStrip
          eyebrow="Atendimento por ordem de contato"
          title="Receba uma proposta personalizada"
          text="Conte o momento da sua empresa e receba uma orientação objetiva sobre escopo, prazo e investimento."
          cta="Fale com a OC Digital"
        />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
