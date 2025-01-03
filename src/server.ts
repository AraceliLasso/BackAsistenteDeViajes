import express from "express";



const server = express();

server.use(express.json())
// server.use(router);

export default server;