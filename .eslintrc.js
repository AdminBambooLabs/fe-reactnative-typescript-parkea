module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'no-named-as-default': 'off',
    'object-curly-spacing': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'off',
    curly: 'multi',
    // 'space-in-brackets': [
    //   'error',
    //   'always',
    //   {
    //     singleValue: false,
    //     objectsInArrays: false,
    //     arraysInArrays: false,
    //     arraysInObjects: false,
    //     objectsInObjects: false,
    //     propertyName: false,
    //   },
    // ],
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
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: 'asc',
          /* ignore case. Options: [true, false] */
          caseInsensitive: true,
        },
      },
    ],
  },
};
