const fs = require('fs');
const http = require('http');
const debug = require('debug')('http');

debug('*');
const PORT = 3000;

const server = http.createServer((request, response) => {
    const {url} = request;

    const path = (url === '/') ? 'index.html' : url;

    if (path === 'favicon.ico') {
        response.write('404');
        response.end();
    }

    const file = fs.readFile(`./public/${path}`, (err, data) => {
        if (err) {
            response.write('404');
            response.end();
        } else {
            response.write(data);
            debug('hello from debug');
            response.end(); 
        }
    });

});

debug(`Server is listening on localhost:${PORT}`);
server.listen(PORT);