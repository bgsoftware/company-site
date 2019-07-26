module.exports = function(grunt, tmpDir) {
  'use strict';

  const babel = {
    options: {
      presets: [
        [
          '@babel/env', {
            'targets': {
              'browsers': [
                'last 1 version',
                'not dead',
                '> 0.2%',
              ],
              'ie': 11,
              'node': 'current'
            }
          }
        ]
      ],
    },
    dist: {
      files: [{
        expand: true,
        src: [`${tmpDir}concat/js/*.js`, `!${tmpDir}concat/js/lib.min.js`]
      }]
    }
  };

  return babel;
};
