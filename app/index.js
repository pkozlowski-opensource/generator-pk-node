var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

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
  }

});
