import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full gradient-plum px-5 py-3.5 text-sm text-white shadow-luxe transition hover:scale-[1.03]"
    >
      <MessageCircle className="h-5 w-5 text-[var(--gold)]" />
      <span className="hidden sm:inline">Chat with a curator</span>
    </a>
  );
}
