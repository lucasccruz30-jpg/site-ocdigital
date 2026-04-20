import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const testimonials = [
  {
    quote: "Atendimento rápido, site impecável e muito profissional.",
    context: "Projeto institucional",
    mark: "01",
  },
  {
    quote: "Conseguimos transmitir muito mais credibilidade após o novo site.",
    context: "Reposicionamento digital",
    mark: "02",
  },
  {
    quote: "Processo organizado, comunicação clara e ótimo resultado.",
    context: "Presença comercial",
    mark: "03",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-rule bg-ink py-24 md:py-32">
      <div className="site-container">
        <SectionIntro
          eyebrow="Prova social"
          title="O que nossos clientes dizem"
          description="Percepções que importam na prática: mais clareza, mais confiança e uma experiência de projeto organizada do primeiro contato à entrega."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.mark} delay={index * 0.08}>
              <article className="group relative min-h-[310px] overflow-hidden border border-white/10 bg-ink-soft p-7 transition duration-500 hover:-translate-y-1 hover:border-ocean/40 hover:bg-[#101722]">
                <div
                  className="absolute right-0 top-0 h-28 w-28 border-b border-l border-white/10 bg-gradient-to-br from-ocean/[0.18] to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-between gap-10">
                  <div className="flex items-center justify-between">
                    <div className="relative h-14 w-14 border border-white/10 bg-black">
                      <span className="absolute inset-2 bg-gradient-to-br from-white via-ocean to-ocean-deep opacity-90" />
                      <span className="absolute inset-[15px] bg-ink-soft" />
                    </div>
                    <Quote className="h-6 w-6 text-ocean" />
                  </div>
                  <blockquote className="text-2xl font-semibold leading-snug text-white text-balance">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-bold uppercase text-muted">
                      {testimonial.context}
                    </span>
                    <span className="font-display text-3xl text-white/[0.32]">
                      {testimonial.mark}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
