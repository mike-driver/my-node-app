function HTTPServerOnPort3001() {
// this creates and starts an http server object listening on another port
// see: https://www.w3schools.com/nodejs/nodejs_http.asp
var http1 = require('http');
http1.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hello World!\
  \n type node alone on the command line to use REPL\
  \n javascript optionally allows semicolons at the end of lines\
  \n javascript is the language of the node.js runtime environment\
  \n ... is not type safe\
  \n ... is case sensitive\
  '
)
  res.end()
}).listen(3001)
console.log('Server Running at localhost:3001/')
}

module.exports = HTTPServerOnPort3001()

