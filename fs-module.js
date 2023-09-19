const {readFileSync, writeFileSync} = require('fs')
//same as
//const fs = require('fs')
//fs.readFileSync

//read the text file, and can be printed with console log eg. console.log(first, second)
const first = readFileSync('./fs-eg/first.txt','utf8')
const second = readFileSync('./fs-eg/second.txt','utf8')

//this will write to a file, the first argument being the file location
//if your argument file does not exist, it will create one 
//the third argument is to specify the implementation, write/append, using a flag (a to append)
writeFileSync(
    './fs-eg/result-sync.txt',
    `Here is the result:\n${first}\n${second}`,
    {flag: 'a'}
) 