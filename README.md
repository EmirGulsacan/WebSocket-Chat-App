# WebSocket Chat App

A real-time chat application built with Node.js and Socket.IO, featuring a simple and responsive UI powered by Bootstrap. This project demonstrates how to create a WebSocket-based chat application where users can exchange messages instantly.

## Getting Started

### Features

- Real-time Messaging: Instant communication between connected clients.
- Unique Socket ID: Every connected client receives a unique identifier.
- Responsive UI: Clean and modern interface designed with Bootstrap 5.
- Scalable Architecture: Clear separation between client and server for easy scalability.

### Technologies Used
- Node.js - Backend framework for handling server-side logic.
- Socket.IO - Enables real-time, bidirectional event-based communication.
- Bootstrap 5 - Provides a responsive and modern front-end design.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/emirgulsacan/websocket-chat-app.git

2. Clone the repository:
   ```bash
   cd websocket-chat-app

3. Clone the repository:
   ```bash
   cd server
   npm install

4. Clone the repository:
   ```bash
   npm start

5. Open the Client:

open client/index.html

### Usage

- Connect to the Chat: Each client connected to the server will receive a unique Socket ID displayed on the screen.
- Select a Client: Click on any client from the list to select them as the message recipient.
- Send Messages: Type a message and hit "Send Message" to communicate with the selected client.
- Real-Time Updates: All connected clients will receive messages instantly in the chat window.

### Testing the Application

To test the chat functionality:

- Open Multiple Tabs/Windows: Open the index.html file in different browser tabs or windows.
- Simulate Chatting: Send messages between different clients by selecting their IDs.
- Check Real-Time Updates: Ensure that messages are displayed instantly in the message list for all intended recipients.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.