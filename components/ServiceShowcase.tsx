import {
  BarChart3,
  Code2,
  FileText,
  LifeBuoy,
  Search,
  Send,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const services = [
  {
    icon: FileText,
    title: "Landing Pages",
    text: "Páginas com narrativa comercial, oferta clara e caminho direto para transformar interesse em contato.",
  },
  {
    icon: Code2,
    title: "Sites Institucionais",
    text: "Estruturas completas para empresas que precisam se apresentar com autoridade, clareza e presença consistente.",
  },
  {
    icon: Send,
    title: "Estrutura digital para empresas",
    text: "Organização de páginas, canais de contato, mensuração e base comercial para crescer com mais previsibilidade.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte e evolução contínua",
    text: "Ajustes, melhorias e acompanhamento para manter a presença digital atual, funcional e comercialmente forte.",
  },
  {
    icon: Search,
    title: "SEO contínuo",
    text: "Evolução técnica e editorial para ampliar relevância, indexação e presença em buscas estratégicas.",
  },
  {
    icon: BarChart3,
    title: "Gestão de tráfego",
    text: "Configuração e acompanhamento de campanhas para gerar visitas qualificadas, mensuração e oportunidades reais.",
  },
];

export function ServiceShowcase() {
  const [primary, ...rest] = services;
  const PrimaryIcon = primary.icon;

  return (
    <section id="servicos" className="section-rule bg-ink py-24 md:py-32">
      <div className="site-container">
        <SectionIntro
          eyebrow="Serviços"
          title="Construímos a estrutura que sustenta uma marca mais clara, confiável e pronta para vender."
          description="A atuação da OC Digital combina direção visual, organização comercial e fundamentos técnicos para que o site represente valor, reduza dúvidas e facilite o próximo contato."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="clip-panel-reverse relative min-h-[480px] overflow-hidden border border-white/10 bg-white text-ink">
            <div className="absolute right-0 top-0 h-full w-px bg-ocean" />
            <div className="flex h-full flex-col justify-between p-8 md:p-10">
              <div>
                <span className="font-display text-5xl text-ocean">01</span>
                <PrimaryIcon className="mt-8 h-8 w-8 text-ink" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-ink/50">
                  Serviço de entrada estratégica
                </p>
                <h3 className="mt-4 max-w-sm text-4xl font-semibold leading-tight text-ink">
                  {primary.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-8 text-ink/[0.68]">
                  {primary.text}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="border-y border-white/10">
            {rest.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.05}
                  className="group grid gap-5 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[92px_1fr_56px]"
                >
                  <span className="font-display text-4xl text-white/[0.36] transition-colors duration-300 group-hover:text-ocean">
                    0{index + 2}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
                      {service.text}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-ocean transition-colors duration-300 group-hover:border-ocean/60 group-hover:bg-ocean group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
