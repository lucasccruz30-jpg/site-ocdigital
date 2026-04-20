import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "./site-data";

export function FinalCTASection() {
  return (
    <section className="section-rule bg-[#151C24] py-20 text-white md:py-24">
      <div className="site-container">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="blue-rule max-w-3xl pt-7">
            <p className="text-xs font-bold uppercase text-ocean">
              Próximo movimento
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-balance md:text-4xl lg:text-[44px]">
              Vamos colocar sua empresa em outro nível no digital.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Receba uma proposta pensada para o momento da sua empresa, com
              presença comercial online, clareza de posicionamento e estrutura
              profissional para gerar contato.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-[52px] items-center justify-center gap-3 bg-white px-6 text-sm font-bold text-ink transition duration-300 hover:bg-ocean hover:text-white md:min-w-60"
          >
            Falar no WhatsApp
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
