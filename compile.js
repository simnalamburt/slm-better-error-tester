var fs = require('fs');
var compile = require('slm').compile;

var code = fs.readFileSync('error.slm', { encoding: 'UTF-8' });

compile(code)();
