"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { navItems, whatsappLink } from "./site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(5,5,5,0.78)" : "rgba(5,5,5,0.18)",
        borderColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.28 }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="wide-container flex h-[76px] items-center justify-between">
        <a href="#home" aria-label="Voltar ao início">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-white/70 lg:flex">
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${"ocdigital.cont@gmail.com"}`}
            className="text-[13px] text-white/[0.55] transition-colors duration-300 hover:text-white"
          >
            ocdigital.cont@gmail.com
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-10 items-center gap-2 border border-white/[0.12] px-4 text-[13px] font-semibold text-white transition duration-300 hover:border-ocean/60 hover:bg-white hover:text-ink"
          >
            Orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="border-t border-white/10 bg-ink/[0.96] px-3 pb-4 pt-2 backdrop-blur-xl lg:hidden"
          >
            <nav className="site-container flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/[0.08] py-5 text-xl font-medium text-white"
                >
                  <span className="mr-4 font-display text-2xl text-ocean">
                    0{index + 1}
                  </span>
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 bg-white px-5 text-sm font-bold text-ink"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
