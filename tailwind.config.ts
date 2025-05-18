import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/molecules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        BMJUA: ['BMJUA'],
      },
      colors: {
        bgColor: '#F7F7F7',
        pointColor: '#F34D52',
        fontColor: '#3A3A3A',
        positiveColor: '#6CA0D0',
        negativeColor: '#FF6969',
      },
      boxShadow: {
        layout: '0px 4px 20px 0px rgba(197, 197, 197, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
