module.exports = {
  '*.{ts,tsx}': (filenames) =>
    filenames
      .filter((f) => !f.endsWith('.config.ts'))
      .map((f) => `eslint --fix --max-warnings=0 "${f}"`)
      .concat(filenames.map((f) => `prettier --write "${f}"`)),
  'apps/**/*.{js,jsx}': (filenames) =>
    filenames
      .filter((f) => !f.endsWith('.config.js'))
      .map((f) => `eslint --fix --max-warnings=0 "${f}"`)
      .concat(filenames.map((f) => `prettier --write "${f}"`)),
  'packages/**/*.{js,jsx}': (filenames) =>
    filenames
      .filter((f) => !f.endsWith('.config.js'))
      .map((f) => `eslint --fix --max-warnings=0 "${f}"`)
      .concat(filenames.map((f) => `prettier --write "${f}"`)),
  '*.{json,md,yml,yaml}': ['prettier --write'],
  '**/*.config.{js,ts}': ['prettier --write'],
};
