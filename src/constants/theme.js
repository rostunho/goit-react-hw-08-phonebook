export const themeLight = Object.freeze({
  colors: {
    outsideBg: '#E7E7E7',
    appBg: '#fff',
    primaryText: '#363636',
    accentGrey: '#F1F1F1',
    additionalGreen: '#41c74e',
    // accent: '#00A3FF',
  },

  spacing: value => `${4 * value}px`,
});

export const themeDark = Object.freeze({
  colors: {
    outsideBg: '#212121',
    appBg: '#363636',
    primaryText: '#fff',
    accentGrey: '#5C5C5C',
    additionalGreen: '#41c74e',

    // accent: '#00A3FF',
  },

  spacing: value => `${4 * value}px`,
});
