// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // if you're using the app directory
    './pages/**/*.{js,ts,jsx,tsx}', // if you're using pages
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};
