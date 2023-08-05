module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      // Add your preferred ESLint rules here
    },
    settings: {
        react: {
          version: 'detect',
        },
      },
  };
  