export const themeLight = Object.freeze({
  colors: {
    appBg: '#E7E7E7',
    headerBg: '#fff',
    primaryText: '#363636',
    // accent: '#00A3FF',
  },

  spacing: value => `${4 * value}px`,
});

export const themeDark = Object.freeze({
  colors: {
    appBg: '#212121',
    headerBg: '#363636',
    primaryText: '#fff',
    // accent: '#00A3FF',
  },

  spacing: value => `${4 * value}px`,
});
