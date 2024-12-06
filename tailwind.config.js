/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#f4f4ee',
        'background': '#060704',
        'primary': '#e6ea88',
        'secondary': '#1b6295',
        'accent': '#6140dd',
       },
    },
  },
  plugins: [],
};
