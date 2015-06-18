/**
 * Gruntfile.js
 */

/*global module:false*/

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Jade 
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                data: {
                    debug: true,
                    timestamp: "<%= new Date().getTime() %>",
                    title : "<%= pkg.name %>"
                },
                files: {
                    'dist/<%= pkg.name %>.html': 'src/main.jade'
                },
            },
        },


        // Less
        less: {
            dist: {
                files: {
                    "dist/assets/css/main.css": "src/assets/less/*.less"
                },
            },
        },


        // Sync
        sync: {
            img: {
                files: [{
                    cwd: 'src/',
                    src: ['assets/img/**'],
                    dest: 'dist/'
                }]
            },
            js: {
                files: [{
                    cwd: 'src/',
                    src: ['assets/js/**'],
                    dest: 'dist/'
                }]
            },
        },


        // JsHint
        jshint: {
            files: ['Gruntfile.js', 'src/assets/js/*.js'],
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
                    cwd: 'src/', 
                    src: ['assets/img/*.{png,jpg}'],
                    dest: 'dist/',
                }],
            },
        },



        // Watcher
        watch: {
            html: {
                files: 'src/*.jade',
                tasks: ['jade'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
            css: {
                files: 'src/assets/less/*.less',
                tasks: ['less'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
            img: {
                files: 'src/assets/img/**',
                tasks: ['imagemin'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
            js: {
                files: 'src/assets/js/**',
                tasks: ['jshint','sync:js'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
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
                        target: 'http://localhost:8888/<%= pkg.name %>.html'
                    },
                },
            },
        },


    });


    // Load Npm Tasks 
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


    // Tasks
    grunt.registerTask('html', ['jade']);
    grunt.registerTask('css', ['less']);
    grunt.registerTask('js', ['jshint']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('default', ['html','css','js']);
    grunt.registerTask('serve', ['connect','html','css','img','js','sync','watch']);

};