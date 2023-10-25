const os = require('os')

//info about the user
const user = os.userInfo()
console.log(user)

//return the system uptime in seconds
console.log(`The sysm is up for : ${os.uptime()} seconds`)

const currentos = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentos)