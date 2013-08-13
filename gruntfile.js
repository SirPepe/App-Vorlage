// Diese Datei beschreibt den Build-Prozess der App. Das Programm "grunt"
// liest diese Datei ein und kompiliert unsere App entsprechend.

module.exports = function(grunt){

'strict mode';

// Das an die Funktion grunt.initConfig() übergebene Objekt regelt den
// Buildprozess. Details unter http://gruntjs.com/
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  // JSHint kontrolliert JavaScript-Dateien auf guten Stil. Im Detail kann man
  // einiges umkonfigurieren, siehe http://www.jshint.com/ und
  // https://github.com/gruntjs/grunt-contrib-jshint
  // Allerdings sind die Standardwerte schon ganz sinnvoll :)
  jshint: {
    all: ['gruntfile.js', 'src/**/*.js']
  },

  // Jade erzeugt HTML-Dateien aus einer vereinfachten Syntax. Für Details siehe
  // http://jade-lang.com/reference/
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

  // RequireJS optimiert AMD-Module zusammen. Beachten, dass mit Bower
  // installierte Komponenten im path angegeben werden sollten, damit die
  // Verwendung etwas einfacher wird.
  requirejs: {
    all: {
      options: {
        baseUrl: 'src',
        paths: {
          requirejs: '../bower_components/requirejs/require',
          jquery: '../bower_components/jquery/jquery'
        },
        name: 'main',
        out: 'app/main.js',
        optimize: 'none'
      }
    }
  }

});

// Lädt die Standard-Plugin-Sammlung von Grunt. Details siehe
// https://github.com/gruntjs/grunt-contrib)
grunt.loadNpmTasks('grunt-contrib');

// Diese Abfolge an Tasks wird bei einem normalen Aufruf von "grunt"
// abgearbeitet
grunt.registerTask('default', [ 'jshint', 'jade', 'requirejs' ]);

//

};