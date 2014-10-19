module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    lesslint: {
      options: {
        csslint: {
          ids: 0,
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
        path: 'dev/less',
        cleancss: true,
      },
      compile: {
        files: {
          'pub/styles/styles.css': 'dev/less/*.less'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'package.json', 'dev/js/*.js'],
      dev: {
        src: ['dev/js/*.js']
      },
      runner: {
        src: ['Gruntfile.js', 'package.json'] 
      }
    },
    concat: {
      options: {

      },
      js: {
        files: {
          'pub/js/script.js': ['dev/js/draw.js', 'dev/js/util.js', 'dev/js/input.js']
        }
      }
    },
    watch: {
      concat: {
        files: 'dev/js/*.js',
        tasks: 'concat:js' 
      },
      lessLintCompile: {
        files: 'dev/less/*.less',
        tasks: ['lesslint:lint', 'less:compile']
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-lesslint');

  // tasks
  grunt.registerTask('default', 'watch');
  grunt.registerTask('test', 'lesslint', 'jshint:dev');
};