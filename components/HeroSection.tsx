"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { whatsappLink } from "./site-data";

const markers = [
  "Agenda limitada para novos projetos",
  "Estrutura estratégica",
  "Atendimento por ordem de contato",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 pt-[92px] md:pt-[112px]"
    >
      <div className="absolute inset-0 fine-grid opacity-[0.35]" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ocean/10 to-transparent"
        aria-hidden="true"
      />
      <div className="wide-container relative pb-10 lg:min-h-[80svh]">
        <div className="grid gap-12 lg:min-h-[calc(80svh-112px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 border-l border-ocean pl-4 text-xs font-semibold uppercase text-white/[0.64] md:mb-8">
              <span className="h-px w-10 bg-ocean" />
              OC Digital / presença profissional
            </div>
            <h1 className="max-w-[720px] text-4xl font-semibold leading-[1.06] text-white text-balance sm:text-5xl lg:text-[54px] xl:text-[58px]">
              Sites profissionais para empresas que querem crescer com
              autoridade.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.68] md:mt-7 md:text-lg md:leading-8">
              Desenvolvemos presença digital profissional para empresas que
              precisam se apresentar melhor, transmitir confiança e transformar
              visitantes qualificados em conversas comerciais.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-[52px] items-center justify-center gap-3 bg-white px-6 text-sm font-bold text-ink transition duration-300 hover:bg-ocean hover:text-white"
              >
                Solicitar análise inicial
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#planos"
                className="inline-flex h-[52px] items-center justify-center gap-3 border border-white/[0.12] px-6 text-sm font-semibold text-white transition duration-300 hover:border-white/[0.35] hover:bg-white/[0.06]"
              >
                Ver planos
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 md:mt-9">
              {markers.map((marker) => (
                <span
                  key={marker}
                  className="inline-flex items-center gap-2 text-sm text-white/[0.72]"
                >
                  <Check className="h-4 w-4 text-ocean" />
                  {marker}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden min-h-[560px] lg:block"
          >
            <div className="absolute left-4 top-3 h-[92%] w-[86%] border border-white/[0.08]" />
            <div className="clip-panel absolute right-0 top-0 h-full w-[88%] border border-white/10 bg-ink-soft/[0.88]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0)_40%),linear-gradient(90deg,rgba(30,167,255,0.12),rgba(30,167,255,0)_34%)]" />
              <div className="absolute left-10 top-10 text-xs font-semibold uppercase text-white/50">
                Arquitetura de presença
              </div>
              <div className="absolute right-10 top-10 h-px w-24 bg-white/[0.16]" />
              <div className="absolute left-10 top-24 h-[1px] w-[70%] bg-white/10" />
              <div className="absolute left-10 top-36 h-[1px] w-[50%] bg-ocean/70" />

              <div className="absolute inset-x-12 top-1/2 -translate-y-1/2">
                <div className="relative mx-auto aspect-square max-w-[360px] overflow-hidden border border-white/10 bg-black">
                  <Image
                    src="/oc-symbol-dark.png"
                    alt="Símbolo OC Digital"
                    fill
                    sizes="360px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute bottom-12 left-10 right-10 grid grid-cols-3 border-t border-white/10 pt-6">
                {["Credibilidade", "Clareza", "Conversão"].map((item, index) => (
                  <div key={item} className="pr-4">
                    <span className="font-display text-3xl text-white/90">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-xs uppercase text-white/50">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-0 flex w-64 items-center gap-4 border border-white/10 bg-ink/[0.88] p-5 backdrop-blur-md">
              <MousePointer2 className="h-5 w-5 text-ocean" />
              <p className="text-sm leading-6 text-white/[0.68]">
                Experiência pensada para transformar percepção em contato
                qualificado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
