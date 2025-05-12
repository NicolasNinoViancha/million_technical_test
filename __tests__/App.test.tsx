/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../src/App';

jest.mock('@home/presenter/di', () => ({
  homeUseCases: {
    getCryptoList: jest.fn().mockResolvedValue([]),
  },
}));
jest.mock(
  '@home/presenter/screens/home/Home.component.tsx',
  () => 'HomeComponent',
);

test('renders correctly', async () => {
  await ReactTestRenderer.act(async () => {
    ReactTestRenderer.create(<App />);
  });
});
