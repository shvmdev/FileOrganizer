#!/usr/bin/env node

let input = process.argv.slice(2);
let helpFnObj = require("./commands/help");
let treeFnObj = require("./commands/tree");
let organizeFnObj = require("./commands/organize");
let command = input[0];
let dirpath = input[1];
switch (command) {
	case `--help`:
		helpFnObj.helpFunc();
		break;
	case `--tree`:
		treeFnObj.treeFunc(dirpath);
		break;
	case `--organize`:
		organizeFnObj.organizeFunc(dirpath);
		break;
	default:
		console.log(
			`Wrong command executed. Type "node cli.js --help" to see the list of commands`
		);
}
