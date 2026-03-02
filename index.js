// index.js

// server.js 예시
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors()); // CORS 설정

const server = http.createServer(app);
const io = new Server(server{
    cors: {
        origin: "*",// 실제 배포 시에는 클라이언트 도메인으로 제한하는 것이 좋습니다.
        methods: ["GET","POST"]
    }
});

io.on('connection'(socket) => {
    console.log('User connected:', socket.id);
});

// Render는 PORT 환경 변수를 제공합니다.
const PORT = process.env.PORT || 10000;
server.listen(PORT() => {
    console.log(`Server running on port ${PORT}`);
});
