
import { type Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import animatePlugin from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
      },
      boxShadow: {
        'glass': '0 8px 60px rgba(139, 92, 246, 0.15)',
        'glow': '0 0 30px rgba(139, 92, 246, 0.6)',
        'divine': '0 20px 60px rgba(139, 92, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)',
      },
      colors: {
        vetchardark: "#0f0f23",
        vetcard: "#1e1b3a",
        vetmuted: "#2a2561",
        vetgreen: "#10b981",
        vetblue: "#3b82f6",
        vetpurple: "#8b5cf6",
        vetprimary: "#8b5cf6",
        vetsecondary: "#10b981",
        vethighlight: "#6366f1",
        vetlight: "rgba(139, 92, 246, 0.1)",
        vetdark: "#0f0f23",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "divine-shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "divine-pulse": {
          "0%": { 
            boxShadow: "0 0 0 0 rgba(139, 92, 246, 0.8), 0 0 0 0 rgba(59, 130, 246, 0.6)"
          },
          "50%": { 
            boxShadow: "0 0 0 20px rgba(139, 92, 246, 0.2), 0 0 0 30px rgba(59, 130, 246, 0.1)"
          },
          "100%": { 
            boxShadow: "0 0 0 0 rgba(139, 92, 246, 0), 0 0 0 0 rgba(59, 130, 246, 0)"
          },
        },
        "divine-floating": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-25px) translateX(5px) rotate(1deg)" },
          "50%": { transform: "translateY(-10px) translateX(-3px) rotate(-0.5deg)" },
          "75%": { transform: "translateY(-18px) translateX(2px) rotate(0.5deg)" },
        },
        "divine-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "animate-gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-25px) translateX(5px) rotate(1deg)" },
          "50%": { transform: "translateY(-10px) translateX(-3px) rotate(-0.5deg)" },
          "75%": { transform: "translateY(-18px) translateX(2px) rotate(0.5deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.5s linear infinite",
        "divine-shimmer": "divine-shimmer 3s linear infinite",
        "divine-pulse": "divine-pulse 2s infinite",
        "divine-floating": "divine-floating 4s ease-in-out infinite",
        "divine-gradient": "divine-gradient 4s ease infinite",
        "animate-gradient-shift": "animate-gradient-shift 20s ease infinite",
        "float": "floating 6s ease-in-out infinite",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config
