/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/Fundo.svg')",
        backgroundGradient:
          "linear-gradient(89.86deg, #9572FC 33.08%, #43E7AD 60.94%, #E1D55D 27.57%)",
        gameGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
