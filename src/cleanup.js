var glob = require('glob'),
    fs = require('fs');

glob('./snippetpkg-*.*.*.gem', {}, function(err, files) {
  if(err) {
    throw err;
    process.exit(1);
  }
  files.forEach(function(file) {
    try {
      fs.unlinkSync(file);
    } catch(e) {
      throw e;
      process.exit(1);
    }
  })
})
