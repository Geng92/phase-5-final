/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('/img/hero-pattern.svg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // }
    },
  },
  plugins: [
    require('@tailwindcss/forms', 'flowbite/plugin')
  ],
}
