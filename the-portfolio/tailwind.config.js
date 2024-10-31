export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}",
];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#011825",
      secondary: "#F0EFEB",
      tertiary: "#0D3056",
      quaternary: "#1689C8",
      bluestone: '#BDC9CB',
      organzapeach: '#FBEEDA',
      bloodymary: '#BA0105',
      bordeaux: '#7B002C',
      furioustiger: '#EA5814',
      purpletulip: '#40002B',
      alpineberryyellow: '#f7e0ba',
    },
    screens: {
      'xs': "450px",
      '3xl': "2160px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.jpeg')",
    },
    keyframes: {
      textRotate1: {
        '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
      },
      textRotate2: {
        '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
        '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
      },
    },
    animation: {
      textRotate1: 'textRotate1 2.4s infinite alternate',
      textRotate2: 'textRotate2 2.4s infinite alternate',
    },
    fontSize: {
      title: '2rem',
      subtitle: '1.5rem',
    },
  },
};
export const plugins = [];