import { palestras } from '../data/content'
import { whatsappMessages } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Palestras() {
  return (
    <section
      id="palestras"
      className="relative overflow-hidden bg-terracota text-white"
    >
      {/* Círculos decorativos */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-terracota-warm/40" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-petrol/10" />

      <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 md:py-28">
        {/* Badge com ícone de microfone */}
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <path d="M12 19v3" />
          </svg>
        </div>

        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/80">
          {palestras.eyebrow}
        </p>

        <h2 className="mx-auto mb-5 max-w-[16em] font-serif text-[clamp(30px,5vw,52px)] leading-[1.06]">
          {palestras.title}
        </h2>

        <p className="mx-auto mb-10 max-w-[44ch] text-[clamp(15px,1.6vw,18px)] leading-[1.7] text-white/90">
          {palestras.body}
        </p>

        {/* Galeria — 4 fotos */}
        <ul className="mb-10 grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-4">
          {palestras.gallery.map((photo, index) => (
            <li
              key={photo.src}
              className={`group overflow-hidden rounded-2xl ring-1 ring-white/25 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.55)] ${
                index % 2 === 1 ? 'md:translate-y-5' : ''
              }`}
            >
              <div className="aspect-[3/4] bg-white/10">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Formatos */}
        <ul className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {palestras.formats.map((format) => (
            <li
              key={format}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white"
            >
              {format}
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppLink(whatsappMessages.palestra)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-xl bg-petrol px-8 py-4 text-[15px] font-semibold text-cream shadow-[0_16px_34px_-14px_rgba(10,45,44,0.7)] transition-colors hover:bg-petrol-light"
        >
          {palestras.cta}
        </a>
      </div>
    </section>
  )
}
