import http from 'http';
import queryString from 'query-string';
import url from 'url';
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let response;
    const urlParse = url.parse(req.url, true);
    const params = queryString.parse(urlParse.search);

    if (urlParse.pathname == '/create-user') {

        fs.writeFile(`users/user-${params.id}.txt`, JSON.stringify(params), function (err) {
            if (err) throw err;
            console.log('Saved!');

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(response);
        });
        response = 'User created!';
    } else if (urlParse.pathname == '/select-user') {
        fs.readFile(`users/user-${params.id}.txt`, function (err, data) {
            response = data;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(response);
        });
    };

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});