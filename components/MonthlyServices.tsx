import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "./site-data";

const monthly = [
  {
    name: "Suporte Básico",
    price: "A partir de R$ 150,00/mês",
    text: "Manutenção pontual, pequenos ajustes e acompanhamento para preservar a qualidade do site.",
  },
  {
    name: "SEO Contínuo",
    price: "A partir de R$ 300,00/mês",
    text: "Melhorias técnicas e editoriais recorrentes para ampliar presença orgânica com consistência.",
  },
  {
    name: "Gestão de Tráfego",
    price: "A partir de R$ 500,00/mês",
    text: "Campanhas, acompanhamento e otimizações para atrair visitantes qualificados.",
  },
];

export function MonthlyServices() {
  return (
    <section className="section-rule bg-ink py-20 md:py-28">
      <div className="site-container">
        <Reveal className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="blue-rule pt-7">
            <p className="text-xs font-semibold uppercase text-ocean">
              Serviços mensais
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white text-balance md:text-4xl">
              Evolução contínua para manter sua presença ativa e competitiva.
            </h2>
          </div>

          <div className="border-y border-white/10">
            {monthly.map((item) => (
              <div
                key={item.name}
                className="grid gap-4 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[1fr_220px]"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                    {item.text}
                  </p>
                </div>
                <p className="font-display text-3xl font-semibold text-white md:text-right">
                  {item.price}
                </p>
              </div>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 py-7 text-sm font-bold text-white transition-colors duration-300 hover:text-ocean"
            >
              Fale sobre evolução mensal
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
