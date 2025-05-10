module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@shared': './src/shared',
          '@assets': './src/assets',
          '@home': './src/home',
          '@details': './src/details',
        },
      },
    ],
  ],
};
