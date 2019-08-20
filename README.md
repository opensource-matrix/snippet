# Snippet
[![Build Status](https://travis-ci.com/opensource-matrix/snippet.svg?branch=master)](https://travis-ci.com/opensource-matrix/snippet) [![CircleCI](https://circleci.com/gh/opensource-matrix/snippet.svg?style=svg)](https://circleci.com/gh/opensource-matrix/snippet)

Snippet is a library of code snippets/examples.  It's made to show people examples of code that can easily be executed and used.

## Installation
Install `Snippet` with `Yarn` or `NPM`:
```
yarn add @matrixoc/snippet
npm install @matrixoc/snippet
```

## Contributing
See [CONTRIBUTING.md](//github.com/opensource-matrix/snippet/blob/master/CONTRIBUTING.md).

## API
There is a few functions that package up some helpful methods for use with Snippet.

```javascript
/* Load up the Node module */
const snippet = require('@matrixoc/snippet');
```

### Get All Snippets
```javascript
snippet.getSnippets();
```

### Get All Snippets for a Certain Language
```javascript
snippet.getSnippetsByLanguage('javascript');
```

### Get a Snippet By Name
```javascript
snippet.getSnippetByName('hello_world_js');
```

### Check If a Snippet Exists
```javascript
snippet.checkName('hello_world_js');
```

### Check If a Language Has Any Snippets
```javascript
snippet.checkLanguage('javascript');
```

## Contributing
You may add a Snippet and it will be reviewed within the next 48 hours.

## Contributors
The following is a list of all contributors(a-z);
- [astronomize](https://github.com/astronomizedev)
- [krthr](https://github.com/krthr)
- [revelmind](https://github.com/revelmind)
