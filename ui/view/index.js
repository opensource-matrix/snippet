const { remote } = require('electron');

/* Window API */

function closeWindow() {
  var window = remote.getCurrentWindow();
  window.close();
}

function minimizeWindow() {
  var window = remote.getCurrentWindow();
  window.minimize();
}

function maximizeWindow() {
  var window = remote.getCurrentWindow()
  window.isMaximized() ? window.unmaximize() : window.maximize();
}
