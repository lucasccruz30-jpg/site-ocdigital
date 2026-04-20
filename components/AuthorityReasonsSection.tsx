import { BadgeCheck, Eye, Handshake, LineChart, Route } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const reasons = [
  {
    icon: Handshake,
    title: "Atendimento próximo",
    text: "Contato direto, leitura do momento da empresa e orientação clara para avançar com segurança.",
  },
  {
    icon: Route,
    title: "Processo claro",
    text: "Escopo, etapas e prioridades definidos desde o início para evitar ruído e retrabalho.",
  },
  {
    icon: Eye,
    title: "Visual estratégico",
    text: "Direção visual pensada para transmitir valor, confiança e posicionamento profissional.",
  },
  {
    icon: LineChart,
    title: "Foco em resultado",
    text: "Estrutura criada para facilitar contato, reduzir dúvidas e apoiar decisões comerciais.",
  },
  {
    icon: BadgeCheck,
    title: "Estrutura profissional",
    text: "Páginas, chamadas e integrações organizadas para uma presença comercial online consistente.",
  },
];

export function AuthorityReasonsSection() {
  return (
    <section className="section-rule bg-ink py-20 md:py-24">
      <div className="site-container">
        <SectionIntro
          eyebrow="Autoridade"
          title="Por que empresas escolhem a OC Digital?"
          description="A OC Digital estrutura presença digital para empresas que precisam parecer mais confiáveis, organizar sua comunicação e transformar percepção em oportunidade real."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <Reveal className="relative overflow-hidden border border-white/10 bg-ink-soft p-8 md:p-10">
            <div
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,167,255,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]"
              aria-hidden="true"
            />
            <div className="relative flex h-full min-h-[380px] flex-col justify-between gap-10">
              <div>
                <span className="text-xs font-bold uppercase text-ocean">
                  Método comercial
                </span>
                <p className="mt-6 max-w-sm text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Presença online com direção, clareza e acabamento profissional.
                </p>
              </div>
              <div className="grid grid-cols-2 border-t border-white/10 pt-6">
                <div>
                  <span className="font-display text-4xl text-white">05</span>
                  <p className="mt-2 text-xs uppercase text-muted">critérios</p>
                </div>
                <div>
                  <span className="font-display text-4xl text-ocean">01</span>
                  <p className="mt-2 text-xs uppercase text-muted">objetivo</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="border-y border-white/10">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal
                  key={reason.title}
                  delay={index * 0.05}
                  className="group grid gap-5 border-b border-white/10 py-6 last:border-b-0 md:grid-cols-[64px_1fr_52px] md:items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 text-ocean transition duration-300 group-hover:border-ocean group-hover:bg-ocean group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                      {reason.text}
                    </p>
                  </div>
                  <span className="font-display text-3xl text-white/[0.28] transition-colors duration-300 group-hover:text-ocean">
                    0{index + 1}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
