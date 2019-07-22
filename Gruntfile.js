module.exports = function(grunt) {
  var timestamp = new Date().getTime();
  // Project configuration.
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
          'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: `assets/vendor/dist/lib.min.js`,
      },
    },
    clean: ['assets/vendor/dist'],
    filerev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      images: {
        src: 'img/**/*.{jpg,jpeg,gif,png,webp}'
      }
    },
    usemin: {
      html: '_layouts/default.html',
    },
    cacheBust: {
      taskName: {
        options: {
          assets: ['assets/vendor/dist/lib.min.js']
        },
        src: "_layouts/default.html"
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-cache-bust');

  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    // 'useminPrepare',
    'concat',
    'cacheBust'
    // 'usemin'
  ]);

};