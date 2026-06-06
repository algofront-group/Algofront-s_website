/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FAFAF7',
          100: '#F5F4EE',
          200: '#EDEAE0',
        },
        ink: {
          900: '#0F0F0F',
          800: '#1A1A1A',
          700: '#2D2D2D',
          600: '#4A4A4A',
          500: '#6B6B6B',
        },
        lime: {
          accent: '#C8F04A',
          dark: '#A8D030',
        },
        amber: {
          accent: '#F5A623',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
