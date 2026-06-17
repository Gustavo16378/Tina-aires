// Textos de seções — centralizados para não ficarem hardcoded nos componentes.

// Fotos reais da Tina (em /public/photos).
const images = {
  hero: '/photos/Tina1.jpeg',
  sobre: '/photos/Tina2.jpeg',
}

export const hero = {
  eyebrow: 'Porto Nacional · Tocantins',
  title: 'Tina Aires',
  subtitle: 'Neuropsicopedagogia, Terapia e Desenvolvimento Humano',
  body: 'Saúde com profundidade humana. Mais de 20 anos cuidando de pessoas — com técnica onde é preciso, com afeto onde importa.',
  ctaPrimary: 'Falar no WhatsApp',
  ctaSecondary: 'Áreas de atuação',
  portrait: images.hero,
  portraitAlt: 'Retrato de Tina Aires',
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Quase três décadas a serviço do cuidado',
  paragraphs: [
    'Nascida e criada em Porto Nacional, Tina construiu uma vida inteira em torno da educação, da saúde e do desenvolvimento humano.',
    'Pedagoga há mais de 20 anos, neuropsicopedagoga com ênfase no TEA, perita do Tribunal de Justiça do Tocantins e coordenadora do Complexo Regulador da Secretaria de Saúde — concursada há 29 anos. Mãe de dois, avó de três.',
  ],
  portrait: images.sobre,
  portraitAlt: 'Tina Aires',
}

export const areas = {
  eyebrow: 'Áreas de atuação',
  title: 'Quatro frentes, um mesmo olhar',
}

export const palestras = {
  eyebrow: 'Palestras',
  title: 'Leve uma palestra que toca e transforma',
  body: 'Desenvolvimento humano, educação e saúde emocional em encontros que unem profundidade técnica e sensibilidade.',
  formats: ['Escolas', 'Equipes', 'Eventos'],
  // Fotos reais de palestras da Tina (em /public/photos).
  gallery: [
    { src: '/photos/palestra1.jpeg', alt: 'Palestra de Tina Aires' },
    { src: '/photos/palestra2.jpeg', alt: 'Tina Aires em evento' },
    { src: '/photos/palestra3.jpeg', alt: 'Palestra de Tina Aires' },
    { src: '/photos/palestra4.jpeg', alt: 'Tina Aires em evento' },
  ],
  cta: 'Contratar uma palestra',
}

export const paraQuem = {
  eyebrow: 'Para quem é',
  title: 'Como eu posso ajudar',
}

export const contato = {
  eyebrow: 'Contato',
  title: 'Vamos conversar?',
  body: 'O primeiro passo é uma conversa. Atendimento presencial e online, a partir de Porto Nacional — TO.',
  cta: 'Falar no WhatsApp',
}
