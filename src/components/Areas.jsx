import { areas } from '../data/content'
import { pillars } from '../data/pillars'

export default function Areas() {
  return (
    <section id="areas" className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-14 sm:px-6 md:py-24">
        <div className="mb-12 max-w-[640px]">
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-terracota">
            {areas.eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(30px,4.2vw,46px)] leading-[1.08] text-petrol">
            {areas.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#e7e1d6] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border-[0.5px] border-[#e7e1d6] px-[30px] py-9"
            >
              <div className="mb-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-petrol text-cream">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={pillar.icon} />
                </svg>
              </div>
              <p className="mb-2 text-[11.5px] uppercase tracking-[0.12em] text-terracota">
                {pillar.tag}
              </p>
              <h3 className="mb-3 font-serif text-[23px] text-petrol">
                {pillar.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-[#52605e]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
