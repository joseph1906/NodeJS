const fs = require('fs');

fs.readFile('sajapp.jpg', (err, data) => {
    if (err) throw err;
    console.log('image size:', data.length, 'bytes');
});


const content = require('fs').promises;

async function readMeNow() {
    try {
        const data = content.readFile('sajapp.jpg');
        console.log('image size:', (await data).length, 'bytes');
    } catch (err) {
        console.error(err);
    }
} 
readMeNow();

const writeFile = require('fs').promises;

async function writeNow() {
    try {
        await writeFile.writeFile('SAJ.txt', 'Hello SAJ.COM');

        const dataset = {name: "sayen", age: 90};
        await writeFile.writeFile('Hello, it is me SAJ', JSON.stringify(dataset, null, 2));

        console.log('File written successfully');
    } catch (err) {
        console.error(err);
    }
}
writeNow();

const appendFolder  = require('fs').promises;

async function appendTimer() {
    try {
        const timeNow = `${new Date().toISOString()}: Application now\n`;
        await appendFolder.appendFile('SAJ.txt', timeNow, 'utf8');
        console.log('File appended successfully');
    } catch (err) {
        console.error(err);
    }
}

appendTimer();

const streamFile = require('fs');
const { Readable } = require('stream');
const { pipeLine } = require('stream/promises');

async function LargeFile() {
    const data = Array(100).fill().map((_, i)=> `Line ${i+1}:${'Sayen'.repeat(100)}\n`);
    const read = Readable.from(data);

    const writeLargeFile = streamFile.createWriteStream('TextLargeFile.txt');
    
    try {
        await pipeLine(read, writeLargeFile);
        console.log('Successfully created');
    } catch {
        console.error('Failed to create');
    }
}

LargeFile();

const DeleteFile = require('fs').promises;

async function DeleteFunction() {
        const Trio = 'TextLargeFile.txt';

    try{
        await DeleteFile.access(Trio);

        await DeleteFile.unlink(Trio);
        console.log('File deleted successfully');
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is dead');
        } else {
            console.error('Error deleting file:', err);
        }
    }
}

DeleteFunction();

const DeletineDirectory = require('fs').promises;
const DeletePath = require('path');

async function DeleteDire(dirPath) {
    try {
        const stat = await DeletineDirectory.stat(dirPath);
        if (!stat.isDirectory) {
            console.log('Not a directory');
            return;
        }
        await DeletineDirectory.rmdir(dirPath);
        console.log('Directory deleted successfully');
    }

    catch (err) {
        if (err.code ==='ENNOENT') {
            Console.log('Directory does not exist');
        } else {
            console.error('Error deleting directory:', err);
        }
    }
}

DeleteFunction('directory-to-delete');

const BaseWork = require('path');
const filename = BaseWork.basename('/path/to/sajapp.jpg');
console.log(filename);


const route = require('path');
const routePath = route.extname('sajapp.jpg');
console.log(routePath);

const os = require('os');
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);

const Architecture = require('os');
console.log(`CPU Architecture: ${os.arch()}`);

const platform = require('os').platform();
console.log(`Operating System Platform: ${platform}`);

const type = require('os').type();
console.log(`operating System Type: ${type}`);

const tmpdir = require('os').tmpdir();
console.log(`Temporary Directory: ${tmpdir}`);

let http = require('http');
let url = require('url');
let System = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end(data);
        return res.end();
    });
}).listen(8080);

const TextBuf = Buffer.from('SAYEN');
console.log(TextBuf);
 const buf = Buffer.alloc(20);
 buf.fill(10);
 console.log(buf);

 const buff = Buffer.alloc(24);
 console.log(buff);
 buff[4] = 98;
 buff[7] = 19;
 buff.write('Hello Bro', 9);
 console.log(buff.toString());

 const buff1 = Buffer.from('Hello SAYEN');
 for (const byte of buff1) {
    console.log(byte);
 };

 buff1.forEach((byte, index) => {
    console.log(`Byte at position ${index}: ${byte}`);
});

const bufA = Buffer.from('Hello');
const target = Buffer.alloc(bufA.length);
bufA.copy(target);
console.log(target.toString());


const TestBu = Buffer.from('Hello sayen');
console.log(TestBu.indexOf('sayen'));
console.log(TestBu.includes('sayen'));
console.log(TestBu.lastIndexOf('y'));

function processPassword(password) {
    const BuffPassword = Buffer.from(password);
    const HashedPassword = HashPassword(BuffPassword);

    BuffPassword.fill(0);
    return HashedPassword;
}

function HashPassword(buffer) {
    let hash = 0;
    for (let a = 0; a < buffer.length; a++) {
        hash = ((hash < 2) - hash) + buffer[a];
        hash |= 0;
    }
    return hash.toString(15);
}

const password = 'beau';
const HashedPassword = processPassword(password);
console.log('Hashed Password:', HashedPassword);

const dns = require('dns');
dns.lookup('eample.com', (err, email, family)=> {
    if (err) throw err;
    console.log(`Resolved: ${email} (IPV${family})`);
});

dns.resolve4('saj.com', (err, address)=> {
    if (err) throw err;
    address.forEach((address) => {
        console.log('Address:', address);
    });
    
 dns.reverse(address[0], (err, hostnames) => {
    if (err) throw err;

    console.log(`Reverse lookup for ${address[0]}:`);
    hostnames.forEach(hostname => {
      console.log(` ${hostname}`);
    });
  });
});

const resolver = new dns.Resolver();
resolver.setServers(['9.9.9.9', '8.8.8.8']);
resolver.resolve4('sayen.com', (err, addresses) => {
    if (err) throw err;
    console.log('hiiiiiiiiii');
    addresses.forEach(addr => {
        console.log(`${addr}`);
    })
})

const util = require('util');
const lookup = util.promisify(dns.lookup);
const dnsCache = new Map();

async function asyncLookup(domain) {
    if (dnsCache.has(domain)) {
    console.log('Cache hit for:', domain);
    return dnsCache.get(domain);
    }
    console.log('Cache miss for:', domain);
    const result = await lookup(domain);
    dnsCache.set(domain, result);
    return result;
}

(async () => {
    const domains = ['saj.com', 'example.com', 'saj.com'];
    for (const domain of domains) {
        const result = await asyncLookup(domain);
        console.log(`Resolved ${domain} -> ${result.address}`);
    }
})