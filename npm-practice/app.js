// const http = require('http');
import http from 'http';
// const url = require('url');
import url from 'url';
// const queryString = require('query-string');
import queryString from 'query-string';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const params = queryString.parse(url.parse(req.url, true).search);

    let answer;
    if (params.question == 'best-movie') {
        answer = 'Star Wars';
    } else if (params.question == 'best-backend-technology') {
        answer = 'Node.js';
    } else {
        answer = 'Sorry, I do not know :(';
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(answer);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});