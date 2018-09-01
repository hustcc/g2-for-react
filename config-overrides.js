const rewireWebpackOutput = require('react-app-rewire-output');

module.exports = function override(config, env) {
  // publicPath
  if (env === 'production') {
    config = rewireWebpackOutput(config, env, {
      publicPath: './',
    });
  }
  return config;
};
