module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      rotate: {
        14.1084: "14.1084deg", // Custom rotation value
      },
    },
  },
};
