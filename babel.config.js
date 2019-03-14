module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
      },
    ],
  ],
  babelrcRoots: ['.', './packages/*'],
};