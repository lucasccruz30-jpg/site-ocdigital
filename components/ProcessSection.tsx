import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const steps = [
  {
    title: "Entendimento do projeto",
    text: "Mapeamos objetivos, público, serviços, posicionamento e canais de contato para criar uma base coerente.",
  },
  {
    title: "Planejamento e proposta",
    text: "Definimos escopo, estrutura das páginas, direção visual, prioridades comerciais e cronograma de entrega.",
  },
  {
    title: "Criação do site",
    text: "Desenvolvemos layout, conteúdo, responsividade, integrações e detalhes técnicos com atenção à experiência.",
  },
  {
    title: "Ajustes finais e entrega",
    text: "Revisamos, refinamos, publicamos e deixamos a empresa pronta para receber contatos com mais credibilidade.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="section-rule bg-ink-soft py-24 md:py-32">
      <div className="site-container">
        <SectionIntro
          eyebrow="Processo"
          title="Método organizado para transformar briefing em presença digital confiável."
          description="O projeto avança por etapas claras, com decisões objetivas, comunicação próxima e foco em chegar a um site que represente bem a empresa."
        />

        <div className="mt-16 grid gap-5">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.06}
              className="group grid gap-6 border-t border-white/10 py-8 md:grid-cols-[180px_1fr]"
            >
              <div className="flex items-start gap-5">
                <span className="font-display text-5xl leading-none text-white/30 transition-colors duration-300 group-hover:text-ocean">
                  0{index + 1}
                </span>
                <span className="mt-4 h-px w-12 bg-white/12 transition-colors duration-300 group-hover:bg-ocean" />
              </div>
              <div className="grid gap-4 md:grid-cols-[0.68fr_1fr]">
                <h3 className="text-3xl font-semibold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
