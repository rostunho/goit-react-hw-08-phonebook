export const themeLight = Object.freeze({
  colors: {
    outsideBg: '#E7E7E7',
    appBg: '#fff',
    primaryText: '#363636',
    secondaryText: '#6F6F6F',
    accentGrey: '#F1F1F1',
    borderGrey: '#959595',
    controlsGrey: '#E6E6E6',
    smoothBlue: '#00A3FF',
  },

  spacing: value => `${4 * value}px`,
});

export const themeDark = Object.freeze({
  colors: {
    outsideBg: '#212121',
    appBg: '#363636',
    primaryText: '#fff',
    secondaryText: '#959595',
    accentGrey: '#5C5C5C',
    borderGrey: '#6F6F6F',
    controlsGrey: '#6F6F6F',
    smoothBlue: '#1788C8',
  },

  spacing: value => `${4 * value}px`,
});
