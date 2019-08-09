/*
-= Snippet =-
Sends a stylized message to the console.
*/
var colors = require('colors');

module.exports = function(type, arg) {
  if(type == 'error') {
    console.log('[SNIPPET ' + '!ERR'.red + ']' + arg)
    process.exit(0);
  } else if(type == 'good') {
    console.log('[SNIPPET ' + '!OUT'.green + ']' + arg)
  }
}
