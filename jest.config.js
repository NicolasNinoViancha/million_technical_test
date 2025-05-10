module.exports = {
  preset: 'react-native',
  setupFiles: ['./__tests__/__mocks__/react-native-config.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.test.tsx'],
};
