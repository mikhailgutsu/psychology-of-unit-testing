module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
};
