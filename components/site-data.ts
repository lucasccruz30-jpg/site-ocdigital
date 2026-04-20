export const whatsappLink =
  "https://wa.me/5511952443843?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20OC%20Digital%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export function getPlanWhatsAppLink(planName: string) {
  const message = `Olá! Vim pelo site da OC Digital e gostaria de solicitar um orçamento e tenho interesse na opção ${planName}`;

  return `https://wa.me/5511952443843?text=${encodeURIComponent(message)}`;
}

export const contact = {
  email: "ocdigital.cont@gmail.com",
  phone: "(11) 95244-3843",
  rawPhone: "11952443843",
};

export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#planos", label: "Planos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];
