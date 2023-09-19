//Global Variables - No Window Object
//console is also available globally

// __dirname - path to current dirrectory
// __filename - file name and path
// require - function to use modules (CommonJS)
// module - info about currentl module (file)
// process - info about env where the program is being executed
// setInterval - an interval funtion, miliseconds as argument 
// setTimeout  - timeout function with number argument

const amount = 12

if (amount < 10){
    console.log('small number')
} else {
    console.log('large number')
}

console.log('Hello, World!')
console.log(__filename)
setInterval(() => {
    console.log('Hello, World!')
}, 5);
