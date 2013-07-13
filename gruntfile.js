module.exports = function(grunt){

grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

  jade: {
    all: {
      options: {
        data: {
          siteTitle: 'Workshop-App'
        }
      },
      files: {
        'app/index.html': 'src/index.jade'
      }
    }
  },

  requirejs: {
    all: {
      options: {
        baseUrl: 'src',
        paths: {
          requirejs: '../components/requirejs/require',
          jquery: '../components/jquery/jquery'
        },
        name: 'main',
        out: 'app/main.js',
        optimize: 'none'
      }
    }
  }

});

grunt.loadNpmTasks('grunt-contrib');

grunt.registerTask('default', [ 'jade', 'requirejs' ]);

};