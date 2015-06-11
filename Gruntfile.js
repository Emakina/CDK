/**
 * Gruntfile.js
 */

/*global module:false*/

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({

    // Package
    pkg: grunt.file.readJSON('package.json'),
    
    // JsHint
    jshint: {
      files: ['Gruntfile.js', 'src/js/*.js'],
      options: {
        globals: {
          jQuery: true
        },
      },
    },
    
    // Less
    less: {
      dist: {
        files: {
          "dist/main.css": "src/css/main.less"
        },
      },
    },

    // Watcher
    watch: {

      html: {
          files: 'src/*.jade',
          tasks: ['html'],
          options: {
            debounceDelay: 250,
            livereload: true
          },
      },

      styles: {
        files: 'src/css/*.less',
        tasks: ['css'],
        options: {
          debounceDelay: 250,
          livereload: true
        },
      },
    
      scripts: {
        files: ['Gruntfile.js','src/js/*.js'],
        tasks: ['js'],
        options: {
          debounceDelay: 250,
          livereload: true
        },
      },

    },
    
    // Concat
    concat: {
      options: {
          stripBanners: true,
          process: true,
          banner: "(function() { if ($('<%= pkg.name %>').length){\n",
          footer: "\n});"
      },
      dist: {
          src: 'src/js/main.js',
          dest: 'dist/js/<%= pkg.name %>.js'
      },
    },

    // Jade
    jade: {
      compile: {
        data: {
          debug: true,
          timestamp: "<%= new Date().getTime() %>",
          title : "<%= pkg.name %>"
        },
        files: {
        'dist/<%= pkg.name %>.min.html': 'src/main.jade'
        },
      },
    },

    // Connect
    connect: {
      server: {
        options: {
            base: 'dist',
            port: '8888',
            livereload: true,
            open: {
                target: 'http://localhost:8888/<%= pkg.name %>.html'
            },
        },
      },
    },

    // Pretify for export only
    prettify: {
      options: {
        indent: 2,
        indent_char: ' ',
        wrap_line_length: 78,
        brace_style: 'expand',
        unformatted: ['a', 'code', 'pre']
      },
      one: {
        src: 'dist/<%= pkg.name %>.min.html',
        dest: 'dist/<%= pkg.name %>.html'
      } 
    },

  });


  // Load Npm Tasks 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Tasks
  grunt.registerTask('html', ['jade','prettify']);
  grunt.registerTask('css', ['less']);
  grunt.registerTask('js', ['jshint','concat']);
  grunt.registerTask('default', ['jshint','less']);
  grunt.registerTask('serve',   ['html','less','js', 'connect', 'watch']);

};