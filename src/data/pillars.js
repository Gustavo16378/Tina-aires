// Ícones SVG (path d) usados nos cards de áreas de atuação.
const icons = {
  heart:
    'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z',
  spark:
    'M12 3l1.6 5.4a2 2 0 0 0 1.3 1.3L20.4 11l-5.5 1.3a2 2 0 0 0-1.3 1.3L12 19l-1.6-5.4a2 2 0 0 0-1.3-1.3L3.6 11l5.5-1.3a2 2 0 0 0 1.3-1.3L12 3Z',
  shield:
    'M20 13c0 5-3.5 7.5-7.6 8.95a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z',
  pulse: 'M22 12h-3.5l-2.5 7-5-18-2.5 11H3',
}

// Áreas de atuação — grid de 4 cards.
export const pillars = [
  {
    tag: 'Reprocessamento Generativo',
    title: 'Terapia TRG',
    icon: icons.heart,
    desc: 'Acolhimento e regulação emocional. Um caminho seguro para reprocessar dores e reencontrar equilíbrio.',
  },
  {
    tag: 'Ênfase em TEA',
    title: 'Neuropsicopedagogia',
    icon: icons.spark,
    desc: 'Avaliação e acompanhamento com foco no Transtorno do Espectro Autista, e apoio próximo às famílias.',
  },
  {
    tag: 'Tribunal de Justiça · TO',
    title: 'Perícia Pedagógica',
    icon: icons.shield,
    desc: 'Laudos e ações sociopsicopedagógicas para o TJ-TO. Rigor técnico e responsabilidade ética.',
  },
  {
    tag: 'Complexo Regulador',
    title: 'Coordenação em Saúde',
    icon: icons.pulse,
    desc: 'Quase três décadas de experiência institucional na Secretaria de Saúde de Porto Nacional.',
  },
]
