// __mocks__/react-native-config.js
jest.mock('react-native-config', () => () => ({
  ENVIRONMENT: 'development',
  API_URL: 'https://api.example.development.org',
}));
