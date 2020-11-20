/**
 * Node Basic
 */
// const name = "NoobDev";

// console.log(name);

// const greet = (name) => {
//     console.log(`hello, ${name}`)
// }

// greet('Noob');
// greet('Dev');

/**
 * Global Object
 */
// console.log(global)

// setTimeout(() => {
//     console.log('NoobDev');
//     clearInterval(int)
// }, 3000);

// const int = setInterval(() => {
//     console.log('NoobDev');
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

/**
 * Modules
 */
//import data from ./array.js
// const {
//     arr,
//     ages
// } = require('./array');

// console.log(arr, ages);

// const os = require('os');
// console.log(os.platform(), os.homedir());

/**
 * File System
 */

const fs = require('fs');

//reading files
// fs.readFile('./blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('Last Line');

//writing files
// fs.writeFile('./blog.txt', 'Hello NoobDev', () => {
//     console.log('File was written')
// });

//directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('Folder created!')
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }

//         console.log('Folder Deleted')
//     })
// }

//deleting files
// if (fs.existsSync('./blog.txt')) {
//     fs.unlink('./blog.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }

//         console.log('File Deleted')
//     })
// }

/**
 * Streams & Buffers
 */