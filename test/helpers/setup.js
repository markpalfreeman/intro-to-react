require('babel-register')
require('babel-polyfill')

// Set up a browser-like environment for tests
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>') // DOM
global.window = document.defaultView // "Window"
global.navigator = window.navigator // Browser navigation
