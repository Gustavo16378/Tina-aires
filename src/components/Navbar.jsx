import { useEffect, useState } from 'react'
import useScrollDirection from '../hooks/useScrollDirection'
import { navLinks, site, whatsappMessages } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'
import MobileMenu from './MobileMenu'

const SCROLL_THRESHOLD = 40

export default function Navbar() {
  const { direction, scrollY } = useScrollDirection()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrolled = scrollY > SCROLL_THRESHOLD
  // Esconde ao rolar para baixo; nunca esconde com o menu aberto.
  const hidden = direction === 'down' && !menuOpen

  // Scroll lock iOS-safe: position:fixed + top:-scrollY no body.
  useEffect(() => {
    if (!menuOpen) return

    const scrollLockY = window.scrollY
    const { body } = document
    body.style.position = 'fixed'
    body.style.top = `-${scrollLockY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      // Restaura a posição exata em que o usuário estava.
      window.scrollTo(0, scrollLockY)
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={[
          'fixed top-0 inset-x-0 z-50 border-b',
          'transition-navbar duration-300 ease-out',
          hidden ? '-translate-y-full' : 'translate-y-0',
          scrolled
            ? 'bg-cream/85 backdrop-blur-md border-petrol/[0.08]'
            : 'bg-transparent border-transparent',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-shell items-center gap-5 px-5 py-4 sm:px-6">
          <a
            href="#top"
            className={[
              'font-serif text-[21px] tracking-tight transition-colors',
              scrolled ? 'text-petrol' : 'text-cream',
            ].join(' ')}
          >
            {site.brand}
          </a>

          {/* Links centralizados no desktop */}
          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  'text-sm font-medium transition-colors hover:opacity-80',
                  scrolled ? 'text-petrol' : 'text-cream/85',
                ].join(' ')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA WhatsApp à direita (desktop) */}
          <a
            href={buildWhatsAppLink(whatsappMessages.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto hidden items-center gap-2 rounded-xl bg-terracota px-[18px] py-[9px] text-[13.5px] font-semibold text-white transition-colors hover:bg-terracota-warm lg:ml-0 lg:inline-flex"
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>

          {/* Hambúrguer < lg */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            className="ml-auto inline-flex p-1 text-petrol lg:hidden"
          >
            <span className={scrolled ? 'text-petrol' : 'text-cream'}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
