/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "light-red-alpha": "hsla(0, 100%, 67%, .1)",
        "orange-yellow": "hsl(39, 100%, 56%)",
        "orange-yellow-alpha": "hsl(39, 100%, 56%, .1)",
        "green-teal": "hsl(166, 100%, 37%)",
        "green-teal-alpha": "hsl(166, 100%, 37%, .1)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "cobalt-blue-alpha": "hsl(234, 85%, 45%, .1)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)"
      },
      fontFamily: {
        "hanken-grotesk": ['"Hanken Grotesk"']
      },
      screens: {
        "desktop": "1440px"
      }
    },
  },
  plugins: [],
}

