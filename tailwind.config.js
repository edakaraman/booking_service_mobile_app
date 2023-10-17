/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins400: ["Poppins_400Regular"],
        poppins500: ["Poppins_500Medium"],
        poppins600: ["Poppins_600SemiBold"],
        poppins700: ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
}

