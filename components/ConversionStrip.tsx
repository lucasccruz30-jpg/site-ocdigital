import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "./site-data";

type ConversionStripProps = {
  eyebrow?: string;
  title: string;
  text: string;
  cta: string;
  tone?: "dark" | "light";
};

export function ConversionStrip({
  eyebrow = "Próximo passo",
  title,
  text,
  cta,
  tone = "dark",
}: ConversionStripProps) {
  const isLight = tone === "light";

  return (
    <section className={isLight ? "bg-[#ECEFF3] text-ink" : "bg-ink text-white"}>
      <div className="site-container">
        <Reveal
          className={`grid gap-8 border-y py-8 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center ${
            isLight ? "border-ink/[0.12]" : "border-white/10"
          }`}
        >
          <div>
            <p
              className={`text-xs font-bold uppercase ${
                isLight ? "text-ocean-deep" : "text-ocean"
              }`}
            >
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-balance md:text-3xl">
              {title}
            </h2>
          </div>
          <p
            className={`max-w-xl text-base leading-8 ${
              isLight ? "text-ink/[0.64]" : "text-muted"
            }`}
          >
            {text}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex h-12 items-center justify-center gap-3 px-5 text-sm font-bold transition duration-300 md:min-w-56 ${
              isLight
                ? "border border-ink/[0.14] text-ink hover:border-ink hover:bg-ink hover:text-white"
                : "bg-white text-ink hover:bg-ocean hover:text-white"
            }`}
          >
            {cta}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
