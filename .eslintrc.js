module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts', './src'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
  },
}
