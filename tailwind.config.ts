import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", '[data-theme="light-terminal"]'], // Add light-terminal as a dark mode variant
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        // Terminal aliases (mapped to new blue palette)
        "terminal-dark": "var(--terminal-dark)",
        "terminal-green": "var(--terminal-green)",
        "terminal-green-bright": "var(--terminal-green-bright)",
        "terminal-green-glow": "var(--terminal-green-glow)",
        "terminal-light-bg": "var(--terminal-light-bg)",
        "terminal-light-text": "var(--terminal-light-text)",
        "terminal-light-text-bright": "var(--terminal-light-text-bright)",
        "terminal-light-border": "var(--terminal-light-border)",
        // New GitHub-style palette tokens
        "gh-bg": "var(--color-bg)",
        "gh-surface": "var(--color-surface)",
        "gh-text": "var(--color-text-primary)",
        "gh-text-muted": "var(--color-text-secondary)",
        "gh-border": "var(--color-border)",
        "gh-accent": "var(--color-accent)",
        "gh-accent-hover": "var(--color-accent-hover)",
        "gh-success": "var(--color-success)",
        "gh-warning": "var(--color-warning)",
        "gh-error": "var(--color-error)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #3B82F6, #06B6D4)",
        "gradient-secondary": "linear-gradient(to right, #A855F7, #3B82F6)",
        "glass-gradient": "linear-gradient(to bottom right, rgba(255, 255, 255, 0.08), transparent)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
