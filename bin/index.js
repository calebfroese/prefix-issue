#! /usr/bin/env node

var shell = require("shelljs");

shell.exec(`echo "# Please include a useful commit message!" > $1`);
