const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const isDevelopment = env !== 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 Chrome versions'],
        },
      },
    ],
    '@babel/preset-react',
  ],
};
