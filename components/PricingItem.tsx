import { ArrowUpRight, Check } from "lucide-react";

type PricingItemProps = {
  name: string;
  subtitle: string;
  price: string;
  items: string[];
  cta: string;
  href: string;
  badge?: string;
  featured?: boolean;
};

export function PricingItem({
  name,
  subtitle,
  price,
  items,
  cta,
  href,
  badge,
  featured = false,
}: PricingItemProps) {
  return (
    <article
      className={
        featured
          ? "relative z-10 border border-white bg-white p-7 text-ink shadow-[0_34px_120px_rgba(30,167,255,0.18)] transition duration-500 hover:-translate-y-1 md:p-8 lg:scale-[1.035]"
          : "relative border border-white/10 bg-ink-soft p-7 text-white transition duration-500 hover:-translate-y-1 hover:border-ocean/35 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-8"
      }
    >
      {badge && (
        <span className="absolute right-5 top-5 border border-ocean/40 bg-ocean px-3 py-1 text-xs font-bold uppercase text-white">
          {badge}
        </span>
      )}
      {featured && (
        <span className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-ocean to-transparent" />
      )}
      <div
        className={`min-h-[156px] border-b pb-7 ${
          featured ? "border-ink/[0.12]" : "border-white/10"
        }`}
      >
        <p
          className={
            featured
              ? "text-xs font-bold uppercase text-ocean-deep"
              : "text-xs font-bold uppercase text-ocean"
          }
        >
          {subtitle}
        </p>
        <h3 className="mt-5 text-3xl font-semibold">{name}</h3>
        <p className="mt-4 font-display text-4xl font-semibold leading-none">
          {price}
        </p>
      </div>

      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <Check
              className={
                featured
                  ? "mt-1 h-4 w-4 flex-none text-ocean-deep"
                  : "mt-1 h-4 w-4 flex-none text-ocean"
              }
            />
            <span className={featured ? "text-ink/[0.72]" : "text-white/[0.72]"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={
          featured
            ? "group mt-8 inline-flex h-12 w-full items-center justify-center gap-3 bg-ink px-5 text-sm font-bold text-white transition duration-300 hover:bg-ocean-deep"
            : "group mt-8 inline-flex h-12 w-full items-center justify-center gap-3 border border-white/[0.12] px-5 text-sm font-bold text-white transition duration-300 hover:border-ocean/60 hover:bg-white hover:text-ink"
        }
      >
        {cta}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
