//import http from 'http';
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error\n');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });

    // метод Post через кнопку submit в интерфейсе сайта
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end('Data received');
        });

    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About Page</h1>');
    } else if (req.url === '/me') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Jenya is the best girl!</h1>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

/*
function greet(name) {
    return 'Hello, ${name}!';
}

//console.log(greet('World'));

console.log('Start');
*/


/*
// routes.js
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });
};

// Импорт и использование этих модулей: Импортируйте модуль и используйте его в вашем основном файле приложения.
const express = require('express');
const app = express();
const routes = require('./routes');

routes(app);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
*/