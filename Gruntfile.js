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
                    "angular-dragdrop.js": [
                        "src/angular-dragdrop.js"
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["uglify"]);
};
