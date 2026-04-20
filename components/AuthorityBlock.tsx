import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "./site-data";

export function AuthorityBlock() {
  return (
    <section className="relative overflow-hidden bg-[#151C24] py-20 text-white md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-ocean" aria-hidden="true" />
      <div className="site-container">
        <Reveal className="grid gap-10 md:grid-cols-[0.78fr_1.22fr]">
          <div className="border-t border-white/10 pt-7">
            <p className="text-xs font-bold uppercase text-ocean-deep">
              Autoridade
            </p>
            <p className="mt-7 max-w-xs text-base leading-8 text-white/65">
              Um site bem construído antecipa valor, organiza percepção e cria
              uma conversa comercial mais forte.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-display text-3xl font-semibold leading-[1.08] text-white text-balance md:text-5xl lg:text-[56px]">
              Seu site não deve apenas existir. Ele precisa transmitir
              confiança, posicionar sua empresa e abrir novas oportunidades de
              negócio.
            </h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex h-12 items-center gap-3 border border-white/[0.14] px-5 text-sm font-bold text-white transition duration-300 hover:border-ocean/60 hover:bg-white hover:text-ink"
            >
              Construir essa presença
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
