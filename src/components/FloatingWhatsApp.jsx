import { whatsappMessages } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={30} />
    </a>
  )
}
