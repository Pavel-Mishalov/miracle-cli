var fs = require('fs');
var path = require('path');

module.exports = function(options) {
  var questions = [];


  questions.push({
    type: 'list',
    name: 'framework',
    message: 'What is framework build',
    default: 'landing',
    choices: [{
      name: 'Miracle frond-end project',
      value: 'landing'
    }, {
      name: 'Miracle WordPress project',
      value: 'wp_blog'
    }],
    when: function () {
      if (!options.framework || !options.framework.match(/^(landing|wp_blog)s?$/i))
        return true;
    }
  });

  questions.push({
    type: 'list',
    name: 'template_front',
    message: 'What use?',
    default: 'landing_bourbon',
    choices: [{
      name: 'Bourbon sass framework',
      value: 'landing_bourbon'
    }, {
      name: 'Foundation zurb template',
      value: 'landing_foundation'
    }, {
      name: 'Bootstrap template',
      value: 'landing_bootstrap'
    }],
    when: function(answers) {
      if (!options.template_front && (answers.framework === 'landing' || options.framework === 'landing'))
        return true;
    }
  });

  questions.push({
    type: 'list',
    name: 'template_back',
    message: 'What use?',
    default: 'wp_blog_bourbon',
    choices: [{
      name: 'Bourbon sass framework',
      value: 'wp_blog_bourbon'
    }, {
      name: 'Foundation sass framework',
      value: 'wp_blog_foundation'
    }, {
      name: 'Bootstrap sass framework',
      value: 'wp_blog_bootstrap'
    }],
    when: function(answers) {
      if (!options.template_back && (answers.framework === 'wp_blog' || options.framework === 'wp_blog'))
        return true;
    }
  });

  questions.push({
    type: 'input',
    name: 'directory',
    message: 'What\'s the project called? (no spaces)',
    validate: function(input) {
      var folder = path.join(process.cwd(), input);
      if (fs.existsSync(folder)) {
        return 'There\'s already a folder with that name in this directory.';
      }
      if (input.indexOf(" ") != -1) {
        return "The project name should not contain any spaces.";
      }
      return true;
    },
    when: function () {
      if (!options.directory)
        return true;
    }
  });


  return questions;
}