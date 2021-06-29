// this creates and starts an http server object listening on a port
// see: https://nodejs.org/api/synopsis.html
function HTTPServer2() {
const http = require('http')
const os = require('os')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('HTTPServer2:\n' + 'number of seconds the computer has been running since it was last rebooted: ' + os.uptime())
});

server.listen(port, hostname, () => {
	console.log(`Server Running at http://${hostname}:${port}/ (localhost:3000)`)	//use back ticks for string interpolation to work
	console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)		//use "export NODE_ENV=development" on comand line unless it will be undefined
	console.log(`process.env.SOME_OTHER: ${process.env.SOME_OTHER}`)
});
}

module.exports = HTTPServer2()