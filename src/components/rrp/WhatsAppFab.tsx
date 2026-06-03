import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919535842495"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl wa-pulse hover:scale-110 transition-transform ring-2 ring-[var(--gold)]/70"
    >
      <MessageCircle size={26} />
    </a>
  );
}
