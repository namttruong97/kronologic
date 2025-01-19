/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/image/bgBox.jpg')",
      },
      fontFamily: {
        title: ['"Playwrite IN"', 'serif'],
      },
      colors: {
        default: '#333333',
        primary: '#84272C',
        secondary: '#888990',
        'purple-primary': '#2E2466',
        'gray-bold': '#161617',
        'gray-sortable': '#5A5064',
        'gray-primary': '#888888',
        'gray-label': '#79777E',
        'gray-secondary': '#65656C',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
