import { SectionIntro } from "./SectionIntro";
import { Reveal } from "./Reveal";

const facts = [
  { label: "Foco", value: "Presença digital com critério comercial" },
  { label: "Entrega", value: "Sites claros, rápidos e prontos para contato" },
  { label: "Método", value: "Design, copy e estrutura trabalhando juntos" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-rule bg-ink py-24 md:py-32">
      <div className="site-container">
        <SectionIntro
          eyebrow="Sobre a OC Digital"
          title="Uma presença online mais madura começa por uma estrutura que transmite confiança."
          description="A OC Digital desenvolve presença digital profissional para empresas que precisam se apresentar melhor, vender com mais clareza e sustentar uma imagem sólida antes mesmo do primeiro atendimento."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="border-l border-white/10 pl-6 md:pl-10">
            <p className="font-display text-3xl leading-[1.12] text-white md:text-5xl">
              Design como presença. Estrutura como estratégia. Clareza como
              ativo comercial.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-9">
            <p className="text-lg leading-9 text-white/70">
              Um site bem construído não apenas informa. Ele organiza a
              percepção da sua empresa, reduz dúvidas, reforça autoridade e cria
              um caminho mais direto para o cliente iniciar uma conversa.
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
