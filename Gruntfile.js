module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/bootstrap/dist/js/bootstrap.min.js',
          'node_modules/aos/dist/aos.js'
        ],
        dest: `assets/vendor/dist/lib.min.js`,
      },
    },
    clean: ['assets/vendor/dist'],
    uglify: {
      my_target: {
        files: {
          'assets/vendor/dist/lib.min.js': ['assets/vendor/dist/lib.min.js']
        }
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'concat',
    'uglify'
  ]);

};