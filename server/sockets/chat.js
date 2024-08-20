const allClients = [];

function chatSockets(roomNamespace) {
    roomNamespace.on("connection", socket => {
        console.log("Connected:", socket.id);
        allClients.push(socket.id);

        socket.emit("sendSocketId", socket.id);
        roomNamespace.emit("loginClient", allClients);

        socket.on("disconnect", () => {
            const index = allClients.indexOf(socket.id);
            if (index !== -1) {
                allClients.splice(index, 1);
                console.log("Disconnected:", socket.id);
            }
            roomNamespace.emit("loginClient", allClients);
        });

        socket.on("sendMessage", data => {
            const targetSocket = roomNamespace.connected[data.socketId];
            if (targetSocket) {
                targetSocket.emit("messages", {
                    socketId: socket.id,
                    message: data.message
                });
            }

            socket.emit("messages", {
                socketId: socket.id,
                message: data.message,
                self: true
            });
        });
    });
}

module.exports = chatSockets;
