module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("tailwindcss-safe-area"),
    require("tailwind-children"),
    require("tailwindcss-animate"),
  ],
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1530px",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        black: "000000",
        white: "#FFFFFF",
        mainBlue: "#6042ec",
        secondaryBlue: "#40c0e0",
        red: "#ff4060",
        orange: "#ff8040",
        yellow: "#ffc040",
        purple: "#9b51e0",
        
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: "0.1875rem",
        md: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
}
