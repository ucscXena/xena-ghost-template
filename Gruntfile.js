/**
 * UCSC Xena Web Gruntfile
 */

"use strict";

module.exports = function (grunt) {

    // Show elapsed time at the end
    require("time-grunt")(grunt);

    // Load all grunt tasks
    require("load-grunt-tasks")(grunt);

    // Grunt configuration
    grunt.initConfig({

        /**
         * Watch config
         */
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: [
                    "assets/css/**/*.css"
                ]
            },
            less: {
                files: [
                    "assets/less/component/**/*.less",
                    "assets/less/core/**/*.less",
                    "assets/less/template/**/*.less"
                ],
                tasks: ["less:dev"]
            }
        },

        // Clean Config
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            ".tmp",
                            "dist/*",
                            "!dist/.git*"
                        ]
                    }
                ]
            }
        },

        /**
         * Less config
         */
        less: {
            dev: {
                options: {
                    paths: ["assets/less/"]
                },
                files: {
                    "assets/css/site.css": "assets/less/site.less"
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: "assets",
                        dest: "dist/assets/",
                        src: "**/*.*"
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: "partials",
                        dest: "dist/partials/",
                        src: "**/*.*"
                    },
                    {
                        expand: true,
                        dot: true,
                        dest: "dist/",
                        src: "*.hbs"
                    },
                    {
                        expand: true,
                        dot: true,
                        dest: "dist/",
                        src: "package.json"
                    },

                ]
            },
        },
        compress: {
            dist: {
                options: {
                    archive: './xena-ghost-theme.zip',
                    mode: 'zip'
                },
                files: [
                    { src: './dist/**',
                      dest: '/'
                    }
                ]
            }
        }
    });

    /**
     * Dev build task - compile less files, start watcher
     */
    grunt.registerTask("pizza", "Compile less files, start watcher", [
        "less:dev",
        "watch"
    ]);

    /**
     * Dev build task - compile less files, start watcher
     */
    grunt.registerTask("dist", "Create zip file", [
        "clean",
        "copy",
        "compress:dist"
    ]);
};
