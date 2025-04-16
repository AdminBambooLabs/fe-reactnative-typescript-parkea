module.exports = {
  root: true,
  extends: ['plugin:import/typescript', '@react-native'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
  rules: {
    'no-named-as-default': 'off',
    'object-curly-spacing': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'unknown',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
