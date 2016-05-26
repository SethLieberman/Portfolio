module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({

    sass: {
      dist: {
        options: { // Target options
          style: 'expanded'
        },
        files: {
          'pub/css/index.css': 'sass/index.scss'
        }
      }
    },

    watch: {
      options: {
        spawn: false,
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
      },
    },

    php: {
      dist: {
        options: {
          port: 8000,
          base: 'pub',
          hostname: 'localhost',
          keepalive: false,
          open: false
        }
      }
    },

    wiredep: {
      dev: {
        src: [
          'pub/**/*.html',
        ],
        options: {
            
        }
      },
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'pub/css/**/*.css',
            'pub/**/*.html'
          ]
        },
        options: {
          watchTask: true,
        }
      }
    },
  });



  // Load the plugin 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('serve', [
    'sass',
    'php',
    'wiredep',
    'browserSync',
    'watch'
  ]);

};