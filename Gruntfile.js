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
        src: 'dev/js/*.js'
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
            'pub/js/jquery.min.js',
            'dev/js/timeSplit.js', 
            'dev/js/ticker.js', 
            'dev/js/hashes.js', 
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
    runOnce: {
      js: 'browserify:dist',
      less: 'less:compile',
      min: 'uglify'
    },
    watch: {
      lessLintCompile: {
        files: 'dev/less/*.less',
        tasks: ['lesslint:lint', 'less:compile']
      },
      browserify: {
        files: 'dev/js/*.js',
        tasks: ['browserify:dist', 'uglify']
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
  grunt.registerTask('default', [
    'watch'
  ]);
  grunt.registerTask('min', 'uglify');
  //grunt.registerTask('runOnce', [
  //  'less',
  //  'browserify:dist', 
  //  'uglify'
  //]);
  grunt.registerMultiTask(
    'runOnce', 
    'compile less & js files, then minify them', 
    function() {
      grunt.log.writeln(this.target + ': ' + this.data);
      grunt.task.run(this.data);
    }
  );
  grunt.registerTask('test', [
    'lesslint', 
    'jshint:dev'
  ]);
};
