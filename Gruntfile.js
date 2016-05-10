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
                    "assets/less/component/**/*.less"
                ],
                tasks: ["less:dev"]
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
        }
    });

    /**
     * Dev build task - compile less files, start watcher
     */
    grunt.registerTask("pizza", "Compile less files, start watcher", [
        "less:dev",
        "watch"
    ]);
};
