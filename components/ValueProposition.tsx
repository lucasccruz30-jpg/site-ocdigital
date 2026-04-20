import { ArrowUpRight, BadgeCheck, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Credibilidade imediata",
    text: "A primeira impressão passa a trabalhar a favor da empresa, com visual consistente e informação organizada.",
  },
  {
    icon: Sparkles,
    title: "Percepção profissional",
    text: "Uma presença digital refinada eleva a leitura de valor antes mesmo do primeiro contato comercial.",
  },
  {
    icon: BadgeCheck,
    title: "Clareza comercial",
    text: "Serviços, diferenciais e próximos passos aparecem de forma objetiva, reduzindo atrito na decisão.",
  },
  {
    icon: LineChart,
    title: "Base para crescimento",
    text: "Estrutura preparada para tráfego, SEO, campanhas, mensuração e evolução contínua.",
  },
];

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <div className="absolute inset-0 fine-grid opacity-[0.18]" aria-hidden="true" />
      <div className="site-container relative">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal className="blue-rule pt-8">
            <p className="text-xs font-semibold uppercase text-ocean">
              Proposta de valor
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.08] text-white text-balance md:text-4xl lg:text-[44px]">
              Percepção profissional antes do primeiro contato comercial.
            </h2>
            <p className="mt-8 text-lg leading-9 text-white/[0.68]">
              Quando comunicação visual, estrutura das páginas e caminho de
              conversão estão alinhados, o site deixa de ser um endereço e
              passa a ser uma ferramenta de confiança, posicionamento e geração
              de oportunidades.
            </p>
            <a
              href="#planos"
              className="mt-10 inline-flex items-center gap-3 text-sm font-bold text-white transition-colors duration-300 hover:text-ocean"
            >
              Conhecer planos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.06}
                  className="grid gap-6 py-8 md:grid-cols-[72px_1fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-ocean">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-white/[0.38]">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xl text-base leading-8 text-muted">
                      {item.text}
                    </p>
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
