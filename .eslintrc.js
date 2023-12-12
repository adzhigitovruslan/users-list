module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 120, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-lines-per-function': ['error', 40],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'for', 'while', 'switch'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['export', 'const', 'let'],
      },
    ],
  },
};
