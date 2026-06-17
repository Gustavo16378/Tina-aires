import { hero } from '../data/content'
import { whatsappMessages } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-petrol text-cream"
    >
      {/* Círculo decorativo */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-petrol-light/60" />

      <div className="relative mx-auto flex w-full max-w-shell flex-wrap items-center gap-8 px-5 py-24 sm:px-6 md:gap-16">
        <div className="min-w-[300px] flex-1 basis-[360px]">
          <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-sage">
            <span className="inline-block h-px w-6 bg-sage" />
            {hero.eyebrow}
          </div>

          <h1 className="mb-5 font-serif text-[clamp(46px,8vw,86px)] leading-[1.0] text-cream">
            {hero.title}
          </h1>

          <p className="mb-6 font-serif text-[clamp(20px,2.6vw,28px)] italic text-terracota-warm">
            {hero.subtitle}
          </p>

          <p className="mb-9 max-w-[30em] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-[#cdd8d3]">
            {hero.body}
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={buildWhatsAppLink(whatsappMessages.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-terracota px-7 py-[15px] text-[15px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(194,112,61,0.6)] transition-colors hover:bg-terracota-warm"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#areas"
              className="border-b-[1.5px] border-cream/30 pb-0.5 text-[15px] font-medium text-cream transition-colors hover:border-cream/60"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Retrato — imagem de exemplo (trocar pela foto real da Tina) */}
        <div className="flex min-w-[280px] flex-1 basis-[300px] justify-center">
          <div className="relative w-[min(380px,80vw)]">
            <div className="absolute -inset-3.5 rounded-full border border-sage/45" />
            <div className="aspect-square overflow-hidden rounded-full bg-petrol-light shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]">
              <img
                src={hero.portrait}
                alt={hero.portraitAlt}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
