import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors'; 

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#00A9FF', 
          'light': '#38B6FF',
          'dark': '#0087CC'
        },
        'secondary': {
          DEFAULT: '#89CFF0', 
        },
        'lm-background': { 
          DEFAULT: colors.white,        
          'light': colors.slate[100],   
          'header': colors.slate[50],   
        },
        'lm-text': {
          'main': colors.slate[800],    
          'muted': colors.slate[500],   
        },
        'dm-background': { 
          DEFAULT: '#0F172A',
          'light': '#1E293B',
          'header': '#0B1220',
        },
        'dm-text': {
          'main': colors.slate[200],
          'muted': colors.slate[400],
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.08)', 
        'card-hover': '0 6px 20px rgba(0, 0, 0, 0.12)',
        'dm-card': '0 4px 15px rgba(0, 0, 0, 0.2)', 
        'dm-card-hover': '0 8px 25px rgba(0, 169, 255, 0.25)', 
      }
    },
  },
  plugins: [],
} 