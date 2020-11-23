const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello');
    });

    greet();

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel="stylesheet" href=""></head>')
    // res.write('<h1>Hello</h1>');
    // res.write('<h1>NoobDev</h1>');
    // res.end();

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            // res.write(data);
            //or
            res.end(data);
        }
    });
});

const port = 3000
server.listen(port, 'localhost', () => {
    console.log('Listening on port: ', port);
});