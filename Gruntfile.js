/**
 * Gruntfile.js
 */

/*global module:false*/

module.exports = function(grunt) {
    require('time-grunt')(grunt);

    /* 
    Arguments settings
    
    To see another samples

    --source=samples/ing = To see the ing case sample
    --source=samples/template = To see examples
    
    */


    src = grunt.option('source') || 'src';
    themePath = grunt.option('themepath');
    cwd = process.cwd();
    
    settings = grunt.file.readJSON(src + '/settings.json');
    settings.imgPath = "/asset/img";
    
    var prod_settings= JSON.parse(JSON.stringify(settings));
    prod_settings.imgPath="%%imgPath%%";
    
    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Case
        settings: settings,
        // Jade 
        jade: {
            dev: {
                options: {
                    debug:false,
                    pretty: true,
                    basedir: cwd,
                    data: settings,
                },
                files: {
                    'dist/<%= settings.name %>.html': '<%= src %>/main.jade',
                },
            },
            prod: {
                options: {
                    debug:false,
                    pretty: true,
                    basedir: cwd,
                    data: prod_settings,
                },
                files: {
                    'dist/<%= settings.name %>.html': '<%= src %>/main.jade',
                },
            },
        },


        // Less
        less: {
            // Case Dev
            dev: {
                files: {
                    "dist/assets/css/main.css": "<%= src %>/main.less"
                },
            },
            // Case Prod
            prod: {
                files: {
                    "dist/assets/css/main.css": "<%= src %>/main.less"
                },
 
            },
            // Bootstrap
            bootstrap: {
                options: {
                    modifyVars: themePath?{themePath: themePath}:{},
                },
                files: {
                    "lib/css/bootstrap.css": "lib/css/bootstrap.less",
                    "lib/css/bootstrap-responsive.css": "lib/css/bootstrap-responsive.less",
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
                    cwd: 'src/',
                    src: ['assets/img/*.{png,jpg}'],
                    dest: 'dist/',
                }],
            },
        },



        // Watcher
        watch: {
            html: {
                files: ['<%= src %>/*.jade','lib/templates/*.jade'],
                tasks: ['jade:dev'],
                options: {
                    debounceDelay: 250,
                    livereload: true
                },
            },
            css: {
                files: '<%= src %>/*.less',
                tasks: ['less:dev'],
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
   
        // Copy
        copy: {
          less: {
             nonull: true,
             src: src + '/main.less', 
             dest: './dist/assets/css/main.less'
          },
          lib: {   
            expand:true,
            files:
            [
              // CSS
              {expand: true, cwd:'lib/css', src: ['**'], dest: 'dist/css'},
              // JS
              {expand: true, cwd:'lib/js', src: ['**'], dest: 'dist/js'},
              // IMG
              {expand: true, cwd:'lib/img', src: ['**'], dest: 'dist/img'},
            ],
          },
        },

        // Clean
        clean: {
            options: {
                 'force': true
            },
            folder: ["dist/"],
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
                        target: 'http://localhost:8888/<%= settings.name %>.html'
                    },
                },
            },
        },


    });


    
    // Setting sources and current working dir.
    grunt.config.set('src', src);
    grunt.config.set('cwd', cwd);

    grunt.log.writeln('Working directory is ./' + src);
    grunt.log.writeln('Project name is ' + grunt.config.get("settings.name"));

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
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tasks
    grunt.registerTask('init', ['less:bootstrap']);
    grunt.registerTask('html', ['jade:dev']);
    grunt.registerTask('css', ['less:dev']);
    grunt.registerTask('js', ['jshint']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('compile', ['html','css','js','sync']);
    grunt.registerTask('export', ['clean','copy:less','jade:prod','less:prod','js','sync','img','compress']);
    
    grunt.registerTask('serve', ['clean','compile','connect','watch']);
    grunt.registerTask('default', ['compile']);
};