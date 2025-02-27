import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        backgroundBanner: "url('/src/images/fundo.jpg')",
      },
      fontFamily: {
        bodyFont: ['space-grotesk', 'sans-serif'],
        titleFont: ['Exo', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        boxBg: 'linear-gradient(145deg, #1e2024, #23272b)',
        bgFundo: '#747169',
        mainColor: '#DC9797',
      },
      boxShadow: {
        shadowOne: '0px 0px 15px 2px #cfcfcf, 0px 0px 15px 2px #cfcfcf',
        shadowTow: '-10px 15px 15px -10px #cfcfcf, 3px 3px 10px -6px #cfcfcf',
      },
    },
  },
  plugins: [],
} satisfies Config;
