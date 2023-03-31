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

    if (urlParse.pathname == '/create-update-user') {
        fs.writeFile(`users/user-${params.id}.txt`, JSON.stringify(params), function (err) {
            if (err) throw err;
            response = 'User created/updated!';

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
    } else if (urlParse.pathname == '/remove-user') {
        fs.unlink(`users/user-${params.id}.txt`, function (err) {
            response = err ? 'User not found!' : 'User deleted!';

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(response);
        });
    };

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// localhost:3000/create-update-user?name=Rafael&age=20&id=1
// localhost:3000/create-update-user?name=Rafael2&age=25&id=1
// localhost:3000/select-user?id=1
// localhost:3000/remove-user?id=1