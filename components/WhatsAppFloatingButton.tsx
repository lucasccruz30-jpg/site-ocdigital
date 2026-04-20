"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./site-data";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.45 }}
      className="whatsapp-premium group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-ocean/45 bg-ocean text-white shadow-[0_22px_70px_rgba(30,167,255,0.34)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-ink md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-white/0 transition duration-300 group-hover:bg-white/10" />
      <MessageCircle className="relative h-6 w-6 md:h-7 md:w-7" />
    </motion.a>
  );
}
