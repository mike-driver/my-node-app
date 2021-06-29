function FileStuff() {
    console.log("FileStuff BEGIN")
    const fs = require('fs')

    try {
    const fd = fs.openSync('./data/test1.txt', 'r')
    console.log(fd);  //just prints the number
    } catch (err) {
    console.error(err)
    }

    // async - non blocking....
    fs.readFile('./data/test1.txt', (err, data) => {
      if (err) {
      console.error(err)
      return
      }
      console.log('byte stream output from ASYNC read: ')
      console.log(data) //byte stream output!
      })

    //sync - blocking ....
    try {
      const data = fs.readFileSync('./data/test1.txt', 'utf8')
      console.log('utf8 output from SYNC read: ')
      console.log(data)
      } catch (err) {
      console.error(err)
      }

      console.log("FileStuff END")
}
module.exports = FileStuff()
