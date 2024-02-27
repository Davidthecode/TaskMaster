import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xxs: {
          min: "0px",
          max: "500px"
        },
        xs: {
          min: "0px",
          max: "690px"
        },
        mobile: {
          min: "0px",
          max: "695px"
        },
        smallTablet: {
          min: "690px",
          max: "840px"
        },
        largeTablet: {
          min: "690px",
          max: "1174px"
        },
        largeScreen: {
          min: "1174px",
          max: "1289px"
        },
      },
    },
  },
  plugins: [],
};
export default config;
