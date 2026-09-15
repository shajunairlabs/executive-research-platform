/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          150: '#e8ecf1',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b',
            a: {
              color: '#0369a1',
              '&:hover': {
                color: '#0284c7',
              },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: '#0f172a',
            },
            code: {
              color: '#e11d48',
              backgroundColor: '#f8fafc',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
