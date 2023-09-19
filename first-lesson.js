const mod1 = require('./module1')
const mod2 = require('./module2')
const mod3 = require('./mind-grenade')


mod1.sayHi('susan')
mod1.sayHi(mod1.john)
mod1.sayHi(mod1.peter)
console.log(mod2.items[0])
mod1.sayHi(mod2.singlePerson.name)