const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

function getRandomTemperature() {
  return (Math.random() * 40).toFixed(2);  // สุ่มอุณหภูมิระหว่าง 0-40 องศา
}

app.get('/', (req, res) => {
  let intervalId = setInterval(() => {
    const randomTemp = getRandomTemperature();
    res.write(`Temperature: ${randomTemp}\n`);  // ส่งข้อมูลอุณหภูมิให้กับ client
    console.log(`Temperature sent: ${randomTemp}`);
  }, 1000);

  req.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

server.listen(3028, () => {
  console.log('Server is running on http://localhost:3028');
});
