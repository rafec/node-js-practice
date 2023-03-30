import http from 'http';
import queryString from 'query-string';
import url from 'url';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const params = queryString.parse(url.parse(req.url, true).search);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});