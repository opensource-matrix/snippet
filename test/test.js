/* Test the Snippet Library */
var snippet = require('../package.js'),
    snippet_log = require('../snippet_log.js');

try {
  console.log(snippet.checkLanguage('javascript'));
  console.log(snippet.checkName('hello_world_js'));
  console.log(snippet.getAllSnippetsByLanguage('javascript'));
  console.log(snippet.getSnippetByName('hello_world_js'));
  console.log(snippet.getSnippets());
} catch(err) {
  snippet_log('error', 'Testing error : ' + err.message);
  process.exit(1);
}
