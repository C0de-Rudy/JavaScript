const path = require('path');

//display path separator  
console.log(path.sep)

//display file path
const filePath = path.join('/path-eg','path-eg2','test.txt')
console.log(filePath)

//display base file 
const base = path.basename(filePath)
console.log(base)

//return an absolute path (resolves path segments into absolute path)
//use __dirname to point to the current directory
const absolute = path.resolve(__dirname, 'path-eg','path-eg2','test.txt')
console.log(absolute)

