const express = require('express');    
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // React app URL
        methods: ['GET', 'POST']
    }
});

// Middleware
app.use(cors());
    app.use(express.json()); // To parse JSON request bodies
    app.use(express.urlencoded({ extended: true }));

// Test Route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

// Socket.IO Logic
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        const botResponse = `Bot says: ${msg}`;
        socket.emit('bot-message', botResponse);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Start the server
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
