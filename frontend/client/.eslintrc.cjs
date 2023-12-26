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
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
    }],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
  }, // Asegúrate de cerrar las reglas con un corchete de cierre
};
