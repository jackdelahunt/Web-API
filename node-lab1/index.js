import http from "http";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  response.writeHead(200);
  response.end("Hello WAD2");
});

server.listen(port);

console.log("RUNNING");
