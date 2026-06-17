import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-petrol-deep text-[#7f968e]">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-4 px-5 py-[34px] sm:px-6">
        <span className="font-serif text-[19px] text-cream">{site.brand}</span>
        <span className="text-[12.5px]">{site.credit}</span>
      </div>
    </footer>
  )
}
