import { BadgeCheck, MessagesSquare, Route } from "lucide-react";
import { Reveal } from "./Reveal";

const trustItems = [
  {
    icon: MessagesSquare,
    title: "Atendimento humano",
    text: "Comunicação direta e próxima para decisões rápidas, sem ruído no processo.",
  },
  {
    icon: Route,
    title: "Processo claro",
    text: "Etapas organizadas, escopo visível e acompanhamento do início à entrega.",
  },
  {
    icon: BadgeCheck,
    title: "Entrega profissional",
    text: "Projeto final pensado para representar bem sua empresa e facilitar contatos.",
  },
];

export function TrustSection() {
  return (
    <section className="section-rule bg-ink-soft py-20 md:py-28">
      <div className="site-container">
        <Reveal className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="blue-rule pt-7">
            <p className="text-xs font-semibold uppercase text-ocean">
              Redução de risco
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white text-balance md:text-4xl">
              Atendimento próximo do início à entrega
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
              Trabalhamos com comunicação clara, acompanhamento próximo e foco
              em entregar um projeto alinhado ao momento da sua empresa.
            </p>
          </div>

          <div className="grid gap-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group grid gap-5 border border-white/10 bg-ink p-6 transition duration-300 hover:border-ocean/45 hover:bg-[#080b10] md:grid-cols-[56px_1fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-ocean transition duration-300 group-hover:border-ocean group-hover:bg-ocean group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-white/28">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-xl text-base leading-8 text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
