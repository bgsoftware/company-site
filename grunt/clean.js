module.exports = (grunt, buildDir, tmpDir) =>  {
  'use strict';

  const clean = {
    build: [buildDir],
    tmp  : [tmpDir]
  };

  grunt.loadNpmTasks('grunt-contrib-clean');

  return clean;
}