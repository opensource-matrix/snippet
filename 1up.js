var fs = require('fs');

var jsonObj = fs.readFileSync('./package.json').toString();
jsonObj = JSON.parse(jsonObj);

var a = jsonObj.version.split('.'),
    major = a[0],
    minor = a[1],
    release = a[2];

release = (parseInt(release) + 1).toString();

var finVer = [
  major,
  minor,
  release
].join('.');

jsonObj.version = finVer;

fs.writeFileSync('./package.json', JSON.stringify(jsonObj, null, 2));
