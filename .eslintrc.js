module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@modules': './src/modules',
          '@pages': './src/pages',
          '@store': './src/store',
        },
      },
    },
  },
};
