/**
 * Gruntfile.js
 */

/*global module:false*/

module.exports = function(grunt) {
    require('time-grunt')(grunt);

     // Arguments settings
    src = grunt.option('source') || 'src';

    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Case
        case: grunt.file.readJSON(src + '/case.json'),

        // Jade 
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                data: {
                    debug: true,
                    timestamp: "<%= new Date().getTime() %>",
                    title : "<%= case.name %>"
                },
                files: {
                    'dist/<%= case.name %>.html': '<%= src %>/main.jade'
                },
            },
        },


        // Less
        less: {
            dist: {
                files: {
                    "dist/assets/css/main.css": "<%= src %>/main.less"
                },
            },
        },


        // Sync
        sync: {
            img: {
                files: [{
                    cwd: '<%= src %>/',
                    src: ['assets/img/**'],
                    dest: 'dist/'
                }]
            },
            js: {
                files: [{
                    cwd: '<%= src %>/',
                    src: ['main.js'],
                    dest: 'dist/assets/js'
                }]
            },
        },


        // JsHint
        jshint: {
            files: ['Gruntfile.js', '<%= src %>/*.js'],
            options: {
                globals: {
                    jQuery: true,
                },
            },
        },
        

        // Imagemin
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                },
                files: [{
                    expand: true,
                    cwd: '<%= src %>/', 
                    src: ['assets/img/*.{png,jpg}'],
                    dest: 'dist/',
                }],
            },
        },



        // Watcher
        watch: {
            html: {
                files: '<%= src %>/*.jade',
                tasks: ['jade'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
            css: {
                files: '<%= src %>/*.less',
                tasks: ['less'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
            img: {
                files: '<%= src %>/assets/img/**',
                tasks: ['imagemin'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
            js: {
                files: '<%= src %>/*.js',
                tasks: ['jshint','sync:js'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
        },


        // Clean
        clean: {
            dest: ["dist"]
        },

        // Compress
        compress: {
          main: {
            options: {
              archive: './dist/export.zip'
            },
            expand: true,
            cwd: 'dist/',
            src: ['**/*','!export.zip'],
          },
        },

        // Connect
        connect: {
            server: {
                options: {
                    base: ['lib','dist'],
                    port: '8888',
                    livereload: true,
                    open: {
                        target: 'http://localhost:8888/<%= case.name %>.html'
                    },
                },
            },
        },


    });


    
    grunt.config.set('src', src);

    grunt.log.writeln('Working directory is ./' + src);


    // Load Npm Tasks 
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');


    // Tasks
    grunt.registerTask('html', ['jade']);
    grunt.registerTask('css', ['less']);
    grunt.registerTask('js', ['jshint']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('compile', ['html','css','js','sync']);
    grunt.registerTask('export', ['clean','compile','img','compress']);
    
    grunt.registerTask('serve', ['connect','clean','compile','img','watch']);
    grunt.registerTask('default', ['compile']);   
};