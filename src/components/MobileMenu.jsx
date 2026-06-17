import ReactDOM from 'react-dom'
import { navLinks, site, whatsappMessages } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'

/**
 * Overlay + painel do menu mobile, renderizados via portal no document.body
 * (fora de qualquer stacking context da página).
 *
 * Regras obrigatórias respeitadas:
 * - Estilos INLINE no overlay e painel (evita conflitos de especificidade).
 * - z-index: overlay 9998, painel 9999.
 * - Painel desliza da direita → esquerda (translateX).
 * - Painel fechado: opacity 0 + pointerEvents none (NÃO removido do DOM).
 * - Prefixo -webkit-backdropFilter para iOS Safari.
 */
export default function MobileMenu({ open, onClose }) {
  const handleLinkClick = () => {
    // Navega para a seção (o href cuida disso) e fecha o menu.
    onClose()
  }

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 9998,
    backgroundColor: 'rgba(10, 45, 44, 0.4)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    transition: 'opacity 320ms ease',
  }

  const panelStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    width: 'min(82vw, 320px)',
    backgroundColor: '#0F3B3A',
    color: '#F7F3EC',
    boxShadow: '-24px 0 60px -28px rgba(0,0,0,0.55)',
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 340ms cubic-bezier(0.22, 1, 0.36, 1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '22px',
  }

  return ReactDOM.createPortal(
    <>
      <div
        style={overlayStyle}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        style={panelStyle}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
          <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: '20px' }}>
            {site.brand}
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#F7F3EC',
              cursor: 'pointer',
              padding: '6px',
              display: 'inline-flex',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                color: '#F7F3EC',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: 500,
                padding: '14px 4px',
                borderBottom: '1px solid rgba(247,243,236,0.1)',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink(whatsappMessages.geral)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          style={{
            marginTop: 'auto',
            backgroundColor: '#C2703D',
            color: '#fff',
            fontWeight: 600,
            fontSize: '15px',
            textAlign: 'center',
            padding: '15px 20px',
            borderRadius: '12px',
            textDecoration: 'none',
          }}
        >
          Falar no WhatsApp
        </a>
      </aside>
    </>,
    document.body,
  )
}
