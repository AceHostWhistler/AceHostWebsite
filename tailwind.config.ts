import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Forum"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Forum"', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#EDE8E0',
          300: '#E5DFD5',
        },
        charcoal: {
          DEFAULT: '#2D2622',
          dark: '#1A1614',
          light: '#5A4D45',
          muted: '#5E5E5E',
        },
      },
      letterSpacing: {
        'luxury': '0.2em',
        'wide-luxury': '0.25em',
        'magazine': '0.3em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    darkMode: false,
  },
  plugins: [],
}
export default config
