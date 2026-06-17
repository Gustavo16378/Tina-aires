import { paraQuem } from '../data/content'
import { audiences } from '../data/audiences'

export default function ParaQuem() {
  return (
    <section id="para-quem" className="bg-cream">
      <div className="mx-auto max-w-shell px-5 py-14 sm:px-6 md:py-24">
        <div className="mb-10 max-w-[600px]">
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-terracota">
            {paraQuem.eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(30px,4.2vw,46px)] leading-[1.08] text-petrol">
            {paraQuem.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {audiences.map((text) => (
            <div key={text} className="flex items-start gap-4 px-1 py-1.5">
              <span className="mt-px flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg bg-petrol text-cream">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <p className="text-[15.5px] leading-[1.55] text-[#3a4847]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
