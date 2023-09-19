// NPM - Node Package Manager

// local dependancy - use it only in this particular project
// npm install <package name>

// global dependency - use it in any project 
// sudo npm install -g <package name>

// package.json - manifest file (stores important info about project/package)
// 1. manual approach (create package.json in the root, create properties ect)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

const _ = require('lodash') 

const items = [1,[2,[3,[4]]]]
//flattenDeep simplifies a nested array, removing nested layers making a 1-dimensional array
//simple example of one of the methods in the lodash package
const newItems = _.flattenDeep(items)

console.log(newItems)