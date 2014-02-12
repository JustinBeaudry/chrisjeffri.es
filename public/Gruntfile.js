module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      files: {
        'css/main.css' : 'css/main.less'
      }
    },
    watch: {
      files: ['<%= less.files %>'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('test', 'less');
  grunt.registerTask('default', 'less');

};