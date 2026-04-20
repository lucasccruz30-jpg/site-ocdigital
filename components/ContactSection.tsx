import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { contact, whatsappLink } from "./site-data";

export function ContactSection() {
  return (
    <section id="contato" className="section-rule bg-ink py-24 md:py-32">
      <div className="site-container">
        <Reveal className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <div className="blue-rule pt-8">
            <p className="text-xs font-semibold uppercase text-ocean">Contato</p>
            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] text-white text-balance md:text-7xl">
              Vamos transformar sua presença digital em um ponto de confiança.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">
              Envie uma mensagem pelo WhatsApp e conte o momento da sua empresa.
              A OC Digital responde com clareza sobre escopo, prazo e melhor
              caminho para o projeto.
            </p>
          </div>

          <div className="border-y border-white/10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 border-b border-white/10 py-7 text-white transition-colors duration-300 hover:text-ocean"
            >
              <span className="flex items-center gap-4">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </span>
              <span className="text-right text-white/60">{contact.phone}</span>
            </a>
            <a
              href={`tel:+55${contact.rawPhone}`}
              className="group flex items-center justify-between gap-6 border-b border-white/10 py-7 text-white transition-colors duration-300 hover:text-ocean"
            >
              <span className="flex items-center gap-4">
                <Phone className="h-5 w-5" />
                Telefone
              </span>
              <span className="text-right text-white/60">{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between gap-6 border-b border-white/10 py-7 text-white transition-colors duration-300 hover:text-ocean"
            >
              <span className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                E-mail
              </span>
              <span className="text-right text-white/60">{contact.email}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex h-14 w-full items-center justify-center gap-3 bg-white px-6 text-sm font-bold text-ink transition duration-300 hover:bg-ocean hover:text-white"
            >
              Solicitar orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
