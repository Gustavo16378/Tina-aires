import { useEffect, useState } from 'react'

/**
 * Linha de progresso fina na borda direita.
 * Substitui a scrollbar nativa: cresce de cima para baixo conforme o
 * usuário desce a página. Cor: petróleo (mesma base do hero).
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const p = scrollable > 0 ? window.scrollY / scrollable : 0
      setProgress(Math.min(1, Math.max(0, p)))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-0 top-0 z-[60] h-screen w-[3px]"
    >
      <div
        className="w-full bg-petrol transition-[height] duration-75 ease-out"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  )
}
