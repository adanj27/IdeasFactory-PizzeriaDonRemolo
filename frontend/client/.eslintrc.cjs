module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components' : ['warn', { allowConstantExport: true },
  ],
  'react/jsx-filename-extension' : 'off',
  'import/no-extraneous-dependencies' : 'off',
  'import/extensions' : 'off',
  'import/no-unresolved': 'off',
  indent: ['error', 2],
  }, // Asegúrate de cerrar las reglas con un corchete de cierre
};
