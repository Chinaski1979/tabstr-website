/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#B14021",
        secondaryColor: "#E5AC47",
        primaryText: "rgb(255,255,255)",
        secondaryText: "rgb(174, 178, 183)",
        bgDark1: "rgb(25, 27, 28)",
        bgDark2: "rgb(38, 39, 43)",
        bgDark3: "rgb(48, 49, 54)",
        bgDark3Hover: "rgb(55, 56, 62)",
        bgDarkTransparent: "rgb(25, 27, 28, 0.7)",
        bgDarkTransparentDarker: "rgb(0,0,0,0.5)",
        bgDarkTransparentLighter: "rgb(48, 49, 54, 0.7)",
        mainBorder: "rgb(255,255,255,0.15)",
        mainBorderDarker: "rgb(255,255,255,0.07)",
        quoteIconColor: "rgb(178, 184, 205)"
      },
      fontFamily: {
        Inter: "Inter",
        display: ['"Bricolage Grotesque Variable"', "Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #B14021 0%, #D9762F 50%, #E5AC47 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(177, 64, 33, 0.18) 0%, rgba(229, 172, 71, 0.12) 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 24px -6px rgba(229, 172, 71, 0.35)",
        "glow-lg": "0 0 80px -12px rgba(177, 64, 33, 0.55), 0 0 32px -8px rgba(229, 172, 71, 0.3)",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};
