import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "split";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "split",
}: SectionIntroProps) {
  if (align === "left") {
    return (
      <Reveal className="max-w-3xl blue-rule pt-7">
        <p className="text-xs font-semibold uppercase text-ocean">{eyebrow}</p>
        <h2 className="mt-5 text-4xl font-semibold leading-[0.98] text-white text-balance md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {description}
          </p>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[0.75fr_1.25fr]">
      <p className="text-xs font-semibold uppercase text-ocean">{eyebrow}</p>
      <div>
        <h2 className="text-4xl font-semibold leading-[0.98] text-white text-balance md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
