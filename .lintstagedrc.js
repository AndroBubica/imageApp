module.exports = {
  '*.{ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  'apps/**/*.{js,jsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  'packages/**/*.{js,jsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
