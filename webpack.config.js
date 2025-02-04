const path = require('node:path');

module.exports = function (options) {
  return {
    ...options,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
};
