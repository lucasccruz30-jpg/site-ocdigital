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
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-ocean/40 bg-ocean text-white shadow-[0_18px_48px_rgba(30,167,255,0.28)] transition duration-300 hover:bg-white hover:text-ink"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
