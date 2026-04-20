import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { PricingItem } from "./PricingItem";
import { getPlanWhatsAppLink } from "./site-data";

const plans = [
  {
    name: "Essencial",
    subtitle: "Projeto Piloto",
    price: "A partir de R$ 800,00",
    cta: "Quero este plano",
    href: getPlanWhatsAppLink("Essencial"),
    items: [
      "1 página (landing page)",
      "Design responsivo",
      "Integração com WhatsApp",
      "Formulário de contato",
      "SEO básico",
      "Entrega rápida",
    ],
  },
  {
    name: "Profissional",
    subtitle: "Presença Completa",
    price: "A partir de R$ 1.800,00",
    cta: "Solicitar orçamento",
    href: getPlanWhatsAppLink("Profissional"),
    badge: "Mais escolhido",
    featured: true,
    items: [
      "Até 5 páginas",
      "Página inicial, sobre, serviços e contato",
      "Design personalizado",
      "Copy básica focada em conversão",
      "SEO inicial estruturado",
      "Integração com WhatsApp e formulário",
      "Google Analytics básico",
    ],
  },
  {
    name: "Growth",
    subtitle: "Foco em Resultados",
    price: "A partir de R$ 3.500,00",
    cta: "Falar com especialista",
    href: getPlanWhatsAppLink("Growth"),
    items: [
      "Tudo do plano profissional",
      "Estrutura de conversão",
      "Copy estratégica",
      "Integração com CRM ou automações simples",
      "Meta Pixel + Google Ads configurado",
      "SEO mais avançado",
      "Direcionamento inicial para tráfego",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="planos" className="relative bg-ink-soft py-24 md:py-32">
      <div className="site-container">
        <SectionIntro
          eyebrow="Planos"
          title="Investimentos claros para empresas que querem avançar com segurança."
          description="Os planos funcionam como pontos de partida. Cada projeto pode ser ajustado conforme escopo, urgência, quantidade de páginas e profundidade estratégica. O atendimento segue por ordem de contato."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3 lg:items-start">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <PricingItem {...plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
