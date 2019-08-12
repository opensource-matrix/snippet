/*

-= Snippet =-
Snippet is a library of code files that are free to use.

*/
var glob = require('glob'),
    fs = require('fs'),
    path = require('path'),
    snippet_log = require('./snippet_log.js');

  /*
    We are looking for files that match:
    - In any directory
    - have a filename and extension

    Then we get them and add them to the `snippets` list.
    Format: [{
      Language: [folder name],
      Name: [file name],
      Path: [file path]
    }]
  */
var snippets = [];
var langs = JSON.parse(fs.readFileSync('../src/languages.json').toString());

try {
  files = glob.sync('snippets/**/*.*')
  files.forEach(function(file) {
    var language = path.dirname(file);
    var fn = path.basename(file);
    var lang = langs[language.slice(9)];

    lang.forEach(function(ext) {
      fn = path.basename(fn, ext);
    });

    snippets.push({
      Language: path.basename(language),
      Name: fn,
      Path: file
    });
  })
} catch(e) {
  snippet_log('error', 'Glob Error : ' + err.message);
}
console.log(snippets)

module.exports = new (class {
  /* Check if a language exists */
  checkLanguage(language) {
    var good = false;
    snippets.forEach(function(snippet) {
      if(language == snippet.Language) {
        good = true;
      }
    });
    return good;
  }

  /* Check if a snippet with name exists */
  checkName(name) {
    var good = false;
    snippets.forEach(function(snippet) {
      if(name == snippet.Name) {
        good = true;
      }
    });
    return good;
  }

  /* Get all snippets in a langauge category */
  getSnippetsByLanguage(language) {
    var good = this.checkLanguage(language);
    if(good == false) {
      snippet_log('error', 'Language "' + language + '" does not exist.');
    } else {
      var s = [];
      snippets.forEach(function(snippet) {
        if(snippet.Language == language) {
          s.push(fs.readFileSync(snippet.Path).toString());
        }
      })
      return s;
    }
  }

  /* Get snippet by name */
  getSnippetByName(name) {
    var good = this.checkName(name);
    if(good == false) {
      snippet_log('error', 'Snippet "' + name + '" does not exist.');
    } else {
      var snippet = '';
      var s = {};
      snippets.forEach(function(snip) {
        if(snip.Name == name) {
          s = snip;
        }
      })
      snippet = fs.readFileSync(s.Path).toString();
      return snippet;
    }
  }

  /* Get all snippets */
  getSnippets() {
    var s = {};
    snippets.forEach(function(snippet) {
      if(typeof s[snippet.Language] !== 'undefined') {
        s[snippet.Language][snippet.Name] = fs.readFileSync(snippet.Path).toString();
      } else {
        s[snippet.Language] = {};
        s[snippet.Language][snippet.Name] = fs.readFileSync(snippet.Path).toString();
      }
    })
    return s;
  }
})();
