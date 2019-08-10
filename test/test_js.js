module.exports = function(js, snippet_log) {
  Object.keys(js).forEach(function(key) {
    try {
      eval(js[key]);
    } catch(e) {
      snippet_log('error', 'Testing error : ' + e);
      process.exit(1);
    }
  })
}
