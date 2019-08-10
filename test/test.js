/* Test the Snippet Library */
var snippet = require('../package.js'),
    snippet_log = require('../snippet_log.js'),
    test_js = require('./test_js.js');

try {
  console.log(snippet.checkLanguage('javascript'));
  console.log(snippet.checkName('hello_world_js'));
  console.log(snippet.getSnippetsByLanguage('javascript'));
  console.log(snippet.getSnippetByName('hello_world_js'));
  console.log(snippet.getSnippets());

  test_js(snippet.getSnippetsByLanguage('javascript', snippet_log));
  test_js(snippet.getSnippetsByLanguage('node', snippet_log));
} catch(err) {
  snippet_log('error', 'Testing error : ' + err.message);
  process.exit(1);
}
