const http = require("http");
const { readFile } = require('node:fs/promises');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    readFile(__dirname + "/intersectionObserver.html", { encoding: 'utf8' })
    .then((content) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(content);
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
