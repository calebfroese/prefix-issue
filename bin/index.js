#! /usr/bin/env node
throw 'nope';
var shell = require("shelljs");
console.log("Hey");
shell.exec("exit 1");