import { ArrowUpRight, Gavel, MapPin, Smile } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { whatsappLink } from "./site-data";

const projects = [
  {
    icon: Gavel,
    title: "Escritório Jurídico",
    description:
      "Site institucional elegante para escritório de advocacia, com foco em autoridade, confiança e captação qualificada.",
    tag: "Autoridade institucional",
    metric: "Confiança",
    accent: "from-ocean/[0.24]",
    layout: "lg:col-span-2",
  },
  {
    icon: Smile,
    title: "Clínica Premium",
    description:
      "Site profissional com apresentação refinada, agendamento simplificado e foco em transmitir segurança.",
    tag: "Confiança e agenda",
    metric: "Agenda",
    accent: "from-white/[0.16]",
    layout: "",
  },
  {
    icon: MapPin,
    title: "Empresa Local Moderna",
    description:
      "Landing page comercial para vendas, posicionamento local e geração de contatos pelo WhatsApp.",
    tag: "Conversão local",
    metric: "Leads",
    accent: "from-ocean-deep/[0.22]",
    layout: "lg:col-span-3",
  },
];

function ProjectMockup({ index }: { index: number }) {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-black p-4 transition duration-500 group-hover:border-ocean/40">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 bg-white/[0.28]" />
          <span className="h-2 w-2 bg-white/[0.18]" />
          <span className="h-2 w-2 bg-ocean" />
        </div>
        <span className="h-px w-20 bg-white/[0.18]" />
      </div>
      <div className="grid min-h-[210px] gap-4 pt-5 md:grid-cols-[1.12fr_0.88fr]">
        <div className="space-y-4">
          <span className="block h-2 w-20 bg-ocean/80" />
          <span className="block h-8 w-11/12 bg-white/[0.88]" />
          <span className="block h-8 w-8/12 bg-white/[0.74]" />
          <span className="block h-px w-full bg-white/[0.12]" />
          <div className="grid grid-cols-3 gap-2">
            <span className="h-12 bg-white/[0.08]" />
            <span className="h-12 bg-white/[0.12]" />
            <span className="h-12 bg-ocean/30" />
          </div>
        </div>
        <div className="relative min-h-[170px] border border-white/10 bg-ink-soft">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              index === 1
                ? "from-ocean/30 via-white/[0.08] to-transparent"
                : index === 2
                  ? "from-white/[0.18] via-ocean/10 to-transparent"
                  : "from-ocean-deep/24 via-white/[0.06] to-transparent"
            }`}
          />
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <span className="block h-2 w-3/4 bg-white/[0.45]" />
            <span className="block h-2 w-1/2 bg-white/[0.22]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-rule bg-ink py-24 md:py-32">
      <div className="site-container">
        <SectionIntro
          eyebrow="Projetos / Portfólio"
          title="Projetos conceito com acabamento de marca pronta para vender."
          description="Três aplicações visuais que mostram como a OC Digital transforma presença online em percepção de valor, clareza comercial e contato qualificado."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal
                key={project.title}
                delay={index * 0.07}
                className={project.layout}
              >
                <article className="group relative h-full overflow-hidden border border-white/10 bg-ink-soft p-5 transition duration-500 hover:-translate-y-1 hover:border-ocean/45 hover:shadow-[0_28px_90px_rgba(30,167,255,0.12)] md:p-6">
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} via-transparent to-transparent opacity-70`}
                    aria-hidden="true"
                  />
                  <div className="relative grid h-full gap-7 lg:grid-cols-[1fr_1.2fr] lg:items-end">
                    <div className="flex h-full flex-col justify-between gap-8">
                      <div>
                        <div className="flex items-center justify-between gap-5">
                          <span className="text-xs font-bold uppercase text-ocean">
                            {project.tag}
                          </span>
                          <Icon className="h-5 w-5 text-ocean" />
                        </div>
                        <h3 className="mt-6 text-3xl font-semibold leading-tight text-white">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-md text-base leading-8 text-muted">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="font-display text-4xl text-white/[0.32]">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-bold uppercase text-white/[0.48]">
                          {project.metric}
                        </span>
                      </div>
                    </div>
                    <ProjectMockup index={index + 1} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-base leading-8 text-muted">
            Solicite uma análise inicial para entender qual estrutura faz mais
            sentido para o momento da sua empresa.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-3 border border-white/[0.12] px-5 text-sm font-bold text-white transition duration-300 hover:border-ocean/60 hover:bg-white hover:text-ink"
          >
            Solicitar análise
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
