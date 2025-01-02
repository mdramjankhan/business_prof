/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      "cupcake","light","",
      {
        mytheme: {

          "primary": "#ff00ff",
          "secondary": "#ff00ff",
          "accent": "#00ffff",
          "neutral": "#ff00ff",
          "base-100": "#ffffff",
          "info": "#0000ff",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ff0000",
        },
      },
    ],
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
