const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('index.html 파일을 읽을 수 없습니다.');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`===============================================`);
  console.log(`🚗 성원오빠의 주차 지도 앱이 실행되었습니다!`);
  console.log(`👉 브라우저 주소: ${url}`);
  console.log(`===============================================`);

  // 브라우저 자동 실행
  exec(`start ${url}`);
});
