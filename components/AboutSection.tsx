import { SectionIntro } from "./SectionIntro";
import { Reveal } from "./Reveal";

const facts = [
  { label: "Foco", value: "Presença digital com critério de negócio" },
  { label: "Entrega", value: "Estrutura clara para gerar contato qualificado" },
  { label: "Método", value: "Design, copy e conversão trabalhando juntos" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-rule bg-ink py-[72px] md:py-[88px]">
      <div className="site-container">
        <SectionIntro
          eyebrow="Sobre a OC Digital"
          title="Autoridade digital começa por uma presença que transmite segurança."
          description="A OC Digital desenvolve presença comercial online para empresas que precisam se apresentar melhor, sustentar valor percebido e gerar conversas mais qualificadas."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="border-l border-white/10 pl-6 md:pl-10">
            <p className="font-display text-3xl leading-[1.14] text-white md:text-4xl">
              Design como presença. Estrutura como estratégia. Clareza como
              ativo comercial.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-9">
            <p className="text-lg leading-9 text-white/70">
              Um site bem construído não apenas informa. Ele organiza a
              percepção da sua empresa, reduz dúvidas, reforça autoridade e
              conduz o visitante para uma decisão de contato mais segura.
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {facts.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-3 py-6 sm:grid-cols-[140px_1fr]"
                >
                  <span className="text-xs font-semibold uppercase text-ocean">
                    {item.label}
                  </span>
                  <span className="text-base leading-7 text-white/[0.78]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
