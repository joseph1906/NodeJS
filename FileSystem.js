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