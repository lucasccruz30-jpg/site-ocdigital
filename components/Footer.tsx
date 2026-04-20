import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { contact, navItems, whatsappLink } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-soft py-12">
      <div className="site-container">
        <div className="grid gap-10 md:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <BrandMark />
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              OC Digital — Sites profissionais para empresas que querem crescer.
            </p>
          </div>

          <nav className="grid gap-3 text-sm text-white/[0.65]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 text-sm text-white/[0.65]">
            <a
              href={`mailto:${contact.email}`}
              className="block transition-colors duration-300 hover:text-white"
            >
              {contact.email}
            </a>
            <a
              href={`tel:+55${contact.rawPhone}`}
              className="block transition-colors duration-300 hover:text-white"
            >
              {contact.phone}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-white"
            >
              WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 OC Digital. Todos os direitos reservados.</p>
          <p>Presença digital com estratégia, precisão e confiança.</p>
        </div>
      </div>
    </footer>
  );
}
