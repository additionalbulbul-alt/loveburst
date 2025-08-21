import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Romantic color palette
        'romantic-pink': "var(--romantic-pink)",
        'rose-gold': "var(--rose-gold)",
        'soft-red': "var(--soft-red)",
        'lavender': "var(--lavender)",
        'peach': "var(--peach)",
        'light-pink': "var(--light-pink)",
        'deep-rose': "var(--deep-rose)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        dancing: ["var(--font-dancing)"],
        poppins: ["var(--font-sans)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(-2deg)" 
          },
          "50%": { 
            transform: "translateY(-20px) rotate(2deg)" 
          },
        },
        "heart-float": {
          "0%": { 
            transform: "translateY(0px) scale(1) rotate(0deg)", 
            opacity: "0.8" 
          },
          "50%": { 
            transform: "translateY(-15px) scale(1.1) rotate(180deg)", 
            opacity: "1" 
          },
          "100%": { 
            transform: "translateY(0px) scale(1) rotate(360deg)", 
            opacity: "0.8" 
          },
        },
        "bounce-in": {
          "0%": { 
            transform: "scale(0.3) rotate(0deg)", 
            opacity: "0" 
          },
          "50%": { 
            transform: "scale(1.05) rotate(180deg)", 
            opacity: "0.8" 
          },
          "100%": { 
            transform: "scale(1) rotate(360deg)", 
            opacity: "1" 
          },
        },
        "pop-burst": {
          "0%": { 
            transform: "scale(1)", 
            opacity: "1" 
          },
          "50%": { 
            transform: "scale(1.2)", 
            opacity: "0.7" 
          },
          "100%": { 
            transform: "scale(3)", 
            opacity: "0" 
          },
        },
        "message-appear": {
          "0%": { 
            transform: "scale(0.5) translateY(20px)", 
            opacity: "0" 
          },
          "60%": { 
            transform: "scale(1.05) translateY(-5px)", 
            opacity: "0.9" 
          },
          "100%": { 
            transform: "scale(1) translateY(0px)", 
            opacity: "1" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "heart-float": "heart-float 4s ease-in-out infinite",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "pop-burst": "pop-burst 0.5s ease-out forwards",
        "message-appear": "message-appear 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
