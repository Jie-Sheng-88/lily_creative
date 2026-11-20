/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Exact palette taken from the original site's compiled CSS
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FFF9E9',
          200: '#FFF3D6',
          300: '#FFEBC0',
        },
        brown: {
          600: '#A18072',
          700: '#977669',
          800: '#846358',
          900: '#43302B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['"Playfair Display"', '"Times New Roman"', 'serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
