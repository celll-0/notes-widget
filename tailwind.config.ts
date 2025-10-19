import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/renderer/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwindcss/**/*.{css,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

