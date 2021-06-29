function OsStuff() {
const os = require('os')
// console.log(os.cpus())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.endianness())
console.log('os.freemem(): ' + os.freemem())
// console.log(os.homedir())
// console.log('number of seconds the computer has been running since it was last rebooted: ' + os.uptime())
// console.log(os.userInfo())
}
module.exports = OsStuff()
