module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'allowImplicit': true,
    'no-compare-neg-zero': true,
    'no-cond-assign': 'always',
    'import/no-unresolved': 'off',
    'no-constant-condition': true,
    'no-dupe-args': true,
    'no-dupe-else-if': true,
    'no-dupe-keys': true,
    'no-duplicate-case': true,
    'no-empty': true,
    'no-ex-assign': true,
    'no-func-assign': true,
    'no-inner-declarations': true,
    'no-irregular-whitespace': true,
    'no-sparse-arrays': true,
    'no-unexpected-multiline': true,
    'no-unreachable': true,
    'no-unsafe-finally': true,
    'no-unsafe-negation': true,
    'use-isnan': true,
    'valid-typeof': true,
    'no-label-var': true,
    'no-shadow': true,
    'no-undefined': true,
    'no-unused-vars': true,
    'no-use-before-define': true,
    'array-bracket-newline': { "multiline": true, "minItems": 3 },
    'array-bracket-spacing': 'never',
    'array-element-newline': { "multiline": true, "minItems": 3 },
    'block-spacing': 'always',
    'comma-dangle': 'always',
    'comma-spacing': { 'before': false, 'after': true },
    'computed-property-spacing': 'always',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@assets': './src/assets',
          '@common': './src/common',
          '@constants': './src/constants',
          '@layouts': './src/layouts',
          '@modules': './src/modules',
          '@pages': './src/pages',
          '@store': './src/store',
        },
      }
    }
  },
};
