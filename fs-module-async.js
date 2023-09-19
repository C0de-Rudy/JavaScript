const {readFile, writeFile} = require('fs')

readFile('./fs-eg/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return; 
    }
    const first = result;
readFile('./fs-eg/second.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result
writeFile(
    './fs-eg/result-async.txt',
    `Here is the result:\n${first}\n${second}`, {flag: 'a'},
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result)
    }
)
})
})