function loadScript(src) {
  "use strict";
  let element = document.createElement('script');
  element.setAttribute('type', 'text/javascript');
  element.setAttribute('src', src);
  document.head.appendChild(element);
}
