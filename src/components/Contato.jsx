import { contato } from '../data/content'
import { site, whatsappMessages } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function Contato() {
  return (
    <section id="contato" className="bg-petrol text-cream">
      <div className="mx-auto max-w-[920px] px-5 py-14 text-center sm:px-6 md:py-25">
        <p className="mb-[18px] text-xs uppercase tracking-[0.16em] text-sage">
          {contato.eyebrow}
        </p>
        <h2 className="mb-[18px] font-serif text-[clamp(34px,5vw,58px)] leading-[1.04] text-cream">
          {contato.title}
        </h2>
        <p className="mx-auto mb-[34px] max-w-[30em] text-[17px] leading-[1.65] text-[#cdd8d3]">
          {contato.body}
        </p>
        <a
          href={buildWhatsAppLink(whatsappMessages.contato)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-xl bg-terracota px-[34px] py-[17px] text-[16px] font-semibold text-white transition-colors hover:bg-terracota-warm"
        >
          <WhatsAppIcon size={19} />
          {contato.cta}
        </a>
        <p className="mt-[26px] text-[13.5px] text-sage">{site.locationFull}</p>
      </div>
    </section>
  )
}
