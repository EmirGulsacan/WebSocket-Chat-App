const http = require("http");
const { serverConfig } = require("./config/serverConfig");
const initializeSockets = require("./sockets");

const server = http.createServer((req, res) => res.end("Socket.IO Server"));

server.listen(serverConfig.port, () => {
    console.log(`Server started on port ${serverConfig.port}`);
});

// Sockets initialization
initializeSockets(server);
