module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    lesslint: {
      options: {
        csslint: {
          'ids': 0,
          'box-model': 0,
          'overqualified-elements': 0
        }
      },
      lint: {
        src: 'dev/less/*.less'
      },
    },
    less: {
      options: {
        cleancss: true,
      },
      compile: {
        files: {
          'pub/styles/styles.css': [
            'dev/less/variables.less', 
            'dev/less/main.less', 
            'dev/less/table.less',
            'dev/less/dots.less',
            'dev/less/*.less',
          ]
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'package.json', 'dev/js/*.js'],
      dev: {
        src: ['!dev/js/jquery*js', 'dev/js/*.js']
      },
      runners: {
        src: ['Gruntfile.js', 'package.json'] 
      }
    },
    browserify: {
      dist: {
        options: {

        },
        files: {
          'pub/js/script.js': [
            'dev/js/timeSplit.js', 
            'dev/js/ticker.js', 
            'dev/js/output.js'
          ]
        }
      },
    },
    uglify: {
      options: {
        mangle: true,
        sourceMap: true 
      },
     js: {
       files: {
          'pub/js/script.min.js': 'pub/js/script.js'
       }
     }
    },
    watch: {
      lessLintCompile: {
        files: 'dev/less/*.less',
        tasks: ['lesslint:lint', 'less:compile']
      },
      browserify: {
        files: ['!dev/js/jquery.js', 'dev/js/*.js'],
        tasks: 'browserify:dist' 
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-lesslint');

  // tasks
  grunt.registerTask('default', 'watch');
  grunt.registerTask('min', 'uglify');
  grunt.registerTask('test', [
    'lesslint', 
    'jshint:dev'
  ]);
};
