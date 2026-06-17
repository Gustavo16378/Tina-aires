import { about } from '../data/content'
import { credentials } from '../data/credentials'

export default function Sobre() {
  return (
    <section id="sobre" className="bg-cream">
      <div className="mx-auto flex max-w-shell flex-wrap items-center gap-8 px-5 py-14 sm:px-6 md:gap-16 md:py-24">
        <div className="min-w-[300px] flex-1 basis-[340px]">
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-terracota">
            {about.eyebrow}
          </p>
          <h2 className="mb-6 font-serif text-[clamp(30px,4.2vw,46px)] leading-[1.08] text-petrol">
            {about.title}
          </h2>

          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={[
                'text-[16.5px] leading-[1.7] text-[#3a4847]',
                i === about.paragraphs.length - 1 ? 'mb-7' : 'mb-4',
              ].join(' ')}
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-2.5">
            {credentials.map((credential) => (
              <span
                key={credential}
                className="rounded-lg border border-[#e3ddd0] bg-white px-3.5 py-2 text-[13px] font-medium text-petrol"
              >
                {credential}
              </span>
            ))}
          </div>
        </div>

        {/* Imagem — exemplo (trocar pela foto real da Tina) */}
        <div className="min-w-[280px] flex-1 basis-[320px]">
          <div className="aspect-[4/5] overflow-hidden rounded-[20px] bg-sage/30 shadow-[0_26px_52px_-30px_rgba(15,59,58,0.45)]">
            <img
              src={about.portrait}
              alt={about.portraitAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
