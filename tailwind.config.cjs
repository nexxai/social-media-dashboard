 import preline from 'preline/plugin.js'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
      },
    },
  },
  plugins: [preline],
};
