function load_scripts(arr) {
  "use strict";

  function loadScript(src) {
    "use strict";
    let element = document.createElement('script');
    element.setAttribute('type', 'text/javascript');
    element.setAttribute('src', src);
    document.head.appendChild(element);
  }


  arr.forEach(elem => {
    loadScript(elem);
  })
}
