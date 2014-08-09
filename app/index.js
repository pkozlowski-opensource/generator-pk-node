var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  //yo run phases:
  //initializing - Your initialization methods (checking current project state, getting configs, etc)
  //prompting - Where you prompt users for options (where you'd call this.prompt())
  //configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  //default
  //writing - Where you write the generator specific files (routes, controllers, etc)
  //conflicts - Where conflicts are handled (used internally)
  //install - Where installation are run (npm, bower)
  //end - Called last, cleanup, say good bye, etc

  promptTask: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'ghorg',
      message : 'GH organisation',
      default : 'pkozlowski-opensource'
    }, function (answers) {
      this.answers = answers;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('test');
  },

  editorConfig: function () {
    this.copy('_editorconfig', '.editorconfig');
  },

  git: function() {
    this.copy('_gitignore', '.gitignore');
  },

  gulp: function() {
    this.copy('gulpfile.js');
  },

  package: function() {
    this.template('_package.json', 'package.json');
  },

  readme: function() {
    this.template('README.md');
  },

  install: function () {
    var done = this.async();
    this.npmInstall(['gulp', 'gulp-jshint', 'gulp-mocha', 'chai'], { 'saveDev': true }, done);
  }

});
