/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Identidade visual — tema claro
        cream: '#F7F3EC', // fundo principal off-white cremoso
        petrol: {
          DEFAULT: '#0F3B3A', // marca / títulos / navbar sólida / footer
          light: '#134E4A',
          deep: '#0A2D2C', // footer mais escuro
        },
        terracota: {
          DEFAULT: '#C2703D', // acento quente (CTAs, destaques)
          warm: '#D98A4E',
        },
        ink: '#1E2B2A', // texto corpo
        sage: '#8FA99B', // detalhe / seções alternadas
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1180px',
      },
      transitionProperty: {
        navbar: 'transform, background-color, backdrop-filter, border-color',
      },
    },
  },
  plugins: [],
}
