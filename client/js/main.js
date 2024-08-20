$(document).ready(() => {
    const socket = io.connect("http://localhost:1453/rooms");
    let selectedSocketId = "";

    socket.on("loginClient", data => {
        let html = "";
        $.each(data, (i, n) => {
            html += `<li style="cursor: pointer;" class="client">${n}</li>`;
        });
        $("#allClients").html(html);
    });

    socket.on("sendSocketId", data => {
        $("#thisSocketId").html(data);
    });

    $("body").on("click", ".client", (event) => {
        $("#txtSocketId").val(`Target Client : ${$(event.target).html()}`);
        selectedSocketId = $(event.target).html();
    });

    $("#btnSendMessage").click(() => {
        const message = $("#txtMessage").val();
        if (selectedSocketId && message) {
            socket.emit("sendMessage", {
                socketId: selectedSocketId,
                message: message
            });
        }
    });

    socket.on("messages", data => {
        const messageHtml = `<li><strong style="${data.self ? 'color: black;' : 'color: green;'}">${data.socketId}</strong> : ${data.message}</li>`;
        $("#messages").append(messageHtml);
        $("#txtMessage").val("");
    });
});
