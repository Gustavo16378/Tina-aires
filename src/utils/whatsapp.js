import { site } from '../data/site'

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * O número fica centralizado em /data/site.js (uma linha só para ajustar).
 */
export function buildWhatsAppLink(message) {
  const number = site.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
