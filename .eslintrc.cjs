module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier',
  ],"rules": {
    "react-hooks/exhaustive-deps": "off",
    "react/display-name": "off",
    "@next/next/no-img-element": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    // "@typescript-eslint/no-unused-vars":"off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface":"false",
    // '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
    // '@typescript-eslint/no-unused-vars': 'off', // Turn off the rule completely
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],

  }
}
