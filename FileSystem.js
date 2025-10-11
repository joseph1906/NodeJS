let http = require('http');
http.createServer((req, res) => {
    res.writeHead(300, {'content-type': 'text/plain'});
    res.end('SAJ.COM');
}).listen(1906);