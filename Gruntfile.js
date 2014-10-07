module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                report: 'min',
                mangle: false
            },
            main: {
                files: {
                    "angular-dragdrop.min.js": [
                        "src/directives.js",
                        "src/controller.js"
                    ]
                }
            }
        },

        concat: {
            dist: {
                src: ["src/directives.js", "src/controller.js"],
                dest: "angular-dragdrop.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask("default", ["uglify", "concat"]);
};
