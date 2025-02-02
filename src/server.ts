import express from "express";
import { ChatOpenAI } from "@langchain/openai";
import usuarioRouter from "./routes/usuarioRouter";
import cors from 'cors';



const server = express();


//middlewares
server.use(express.json());
server.use(cors());
//routes
server.use(usuarioRouter);

async function init() {
    const llm = new ChatOpenAI();
    const response = await llm.invoke("Hello, world!");
    console.log(response); // Solo si quieres ver la respuesta en la consola
}

init();

export default server;