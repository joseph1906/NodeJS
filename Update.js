/*const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('SAYEN_COPY.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);*/
/*const server =  http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello SAJ.COM');
        res.end();
    } else {
        res.write('Using some other domain');
        res.end();
    }
})

server.listen('3000');*/
const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    const create = fs.createWriteStream('index.html');
    create.write('<html><body><h1>Hello from SAJ</h1></body></html>');
    create.end();
    const readStream = fs.createReadStream('./index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);