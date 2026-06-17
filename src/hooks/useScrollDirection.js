import { useEffect, useState } from 'react'

/**
 * Compara a posição atual do scroll com a anterior para detectar direção.
 * Retorna { direction: 'up' | 'down', scrollY }.
 * - scroll para baixo → 'down' (navbar esconde)
 * - scroll para cima  → 'up'   (navbar volta)
 */
export default function useScrollDirection() {
  const [direction, setDirection] = useState('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const currentY = window.scrollY
      // Ignora micro-oscilações e o bounce no topo.
      if (Math.abs(currentY - lastY) > 6) {
        setDirection(currentY > lastY && currentY > 80 ? 'down' : 'up')
        lastY = currentY > 0 ? currentY : 0
      }
      setScrollY(currentY)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { direction, scrollY }
}
