/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          navy: '#0A192F',
          navyLight: '#172A45',
          blue: '#1D4ED8',
          blueHover: '#1E40AF',
          gold: '#F59E0B',
          goldHover: '#D97706',
          goldLight: '#FEF3C7',
          emerald: '#059669',
          cream: '#FAF8F5',
          card: '#FFFFFF',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
        'glow': '0 0 25px rgba(245, 158, 11, 0.3)',
        'subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
