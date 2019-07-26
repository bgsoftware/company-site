module.exports = (grunt, scripts) => {
  'use strict';

  const jshint = {
    /* Global options. */
    options: {
      strict:    true,
      eqeqeq:    true,
      indent:    2,
      quotmark:  'single',
      undef:     true,
      unused:    true,
      esnext:    true,
      reporter:  require('jshint-stylish')
    },

    /* Get the lint out of all client files. */
    app: {
      options: {
        globals: {
          angular: true,
          jQuery:  true,
          window:  true
        }
      },
      files: {
        src: scripts
      }
    }
  };

  return jshint;
};