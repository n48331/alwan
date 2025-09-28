import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--primary), var(--secondary))',
        'gradient-to-l': 'linear-gradient(to left, var(--primary), var(--secondary))',
        'gradient-to-t': 'linear-gradient(to top, var(--primary), var(--secondary))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--primary), var(--secondary))',
      },
    },
  },
  plugins: [],
};
export default config;
