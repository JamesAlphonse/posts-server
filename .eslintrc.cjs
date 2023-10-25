module.exports = {
  'env': {
    'node': true,
    'es2021': true
  },
  'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'root': true,
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs,ts,cts}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
