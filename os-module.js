const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//returns the system uptime (minutes)
console.log(`The system uptime is: ${os.uptime%60}`)

//information about operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totamMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)