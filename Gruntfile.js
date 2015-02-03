module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Grunfile.js', 'public/js/controller/*.js']
    },

    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/jquery.min.js': 'src/jquery.js'
        
        }
      }
    },

    // compile less stylesheets to css -----------------------------------------
    /*less: {
      build: {
        files: {
          'dist/css/pretty.css': 'src/css/pretty.less'
        }
      }
    },*/

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  CSS \n*/\n'
      },
      build: {
        files: {
           'public/css/app-min.css':'public/css/app.css',
           'public/css/bootstrap-min.css': 'public/css/bootstrap.css',
           'public/css/bootstrap-theme-min.css':'public/css/bootstrap-theme.css'
        }
      }
    },

    

    // configure watch to auto update ------------------------------------------
    watch: {
      stylesheets: {
        files: ['public/css/app.css','public/css/bootstrap.css','public/css/bootstrap-theme.css'],
        tasks: 'cssmin'
      },
      scripts: {
        files: 'public/js/**/*.js',
        tasks: ['jshint', 'uglify']
      }
    }

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  grunt.registerTask('default', ['jshint', 'uglify','cssmin','jade']);

};