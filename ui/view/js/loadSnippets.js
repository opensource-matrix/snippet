/* Load Snippets */
var snippet = require('@matrixoc/snippet');
var snippets = snippet.getSnippets();

Object.keys(snippets).forEach(function(lang) {
  console.log(lang);
  document.write(`
    <div id="content" class="item grey lighten-2">
      <div class="window-button">
        <span class="breadcrumb">${snip.Language}</a>
      </div>
      <div class="data">
        Click to see ${lang}'s snippets.
      </div>
    </div>
  `)
})
