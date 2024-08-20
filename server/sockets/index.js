const socketIO = require("socket.io");
const chatSockets = require("./chat");

function initializeSockets(server) {
    const io = socketIO(server);

    // Chat namespace
    const roomNamespace = io.of("/rooms");
    chatSockets(roomNamespace);
}

module.exports = initializeSockets;
