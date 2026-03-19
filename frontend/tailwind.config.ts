import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space)"],
      },
    },
  },
};

export default config;