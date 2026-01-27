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
/*const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    const create = fs.createWriteStream('index.html');
    create.write('<html><body><h1>Hello from SAJ</h1></body></html>');
    create.end();
    const readStream = fs.createReadStream('./index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);*/


/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from SAJ.COM');
});
app.listen(3000);

app.get('/SAJ', (req, res)=> {
    res.send('Allo, allo from SAJ.COM');
})
app.get('/SAJ/:name/:age', (req,res)=> {
    console.log(req.params);
    res.send(`Hello ${req.params.name}, you are ${req.params.age}`);
})*/
/*const express = require('express');
const app = express();
const path = require('path');
app.use('/public', express.NODEJS(path.join(__dirname,'NODEJS')));
app.get('/', (res,req)=> {
    res.sendFile(path.join(__dirname,NODEJS,'index.html'));
})
app.listen(3000);*/
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'static','form.html'));
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/', (req,res) =>{
    console.log(req.body);
    res.json({success:true});
});
app.listen(3000);