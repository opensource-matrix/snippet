#!usr/bin/env node

var fs = require('fs'),
    path = require('path');

var jsonObj = fs.readFileSync(path.join(__dirname, './src/languages.json')).toString();
jsonObj = JSON.parse(jsonObj);

var args = process.argv;
if(path.basename(args[0]) == 'node.exe') {
  args = args.slice(2);
} else {
  args = args.slice(1);
}

if(!typeof jsonObj[args[0]] == 'undefined') {
  throw new Error('This language already exists.');
  process.exit(1);
} else {
  jsonObj[args[0]] = args.slice(1);
}

fs.writeFileSync(path.join(__dirname, './src/languages.json'), JSON.stringify(jsonObj, null, 2));
