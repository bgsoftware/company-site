module.exports = (concatFiles, fullLibPath) => {
  'use strict';

  const concat = {
    options: {
      stripBanners: true,
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
    },
    dist: {
      src: concatFiles,
      dest: fullLibPath
    }
  };

  return concat;
}