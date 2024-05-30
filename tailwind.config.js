const { nextui } = require("@nextui-org/react"); // eslint-disable-line

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Geist", "-apple-system", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              "50": "#fefce8",
              "100": "#fef9c3",
              "200": "#fef08a",
              "300": "#fde047",
              "400": "#facc15",
              "500": "#eab308",
              "600": "#ca8a04",
              "700": "#a16207",
              "800": "#854d0e",
              "900": "#713f12",
              "950": "#422006",
              DEFAULT: "#facc15",
            },
            secondary: {
              "50": "#fafaf9",
              "100": "#f5f5f4",
              "200": "#e7e5e4",
              "300": "#d6d3d1",
              "400": "#a8a29e",
              "500": "#78716c",
              "600": "#57534e",
              "700": "#44403c",
              "800": "#292524",
              "900": "#1c1917",
              "950": "#0c0a09",
              DEFAULT: "#78716c",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: {
              "50": "#fefce8",
              "100": "#fef9c3",
              "200": "#fef08a",
              "300": "#fde047",
              "400": "#facc15",
              "500": "#eab308",
              "600": "#ca8a04",
              "700": "#a16207",
              "800": "#854d0e",
              "900": "#713f12",
              "950": "#422006",
              DEFAULT: "#eab308",
            },
            secondary: {
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
              950: "#020617",
              DEFAULT: "#64748b",
            },
          },
        }
      },
    })
  ]
}

