import express from "express";
import { ChatOpenAI } from "@langchain/openai";
import usuarioRouter from "./routes/usuarioRouter";
import cors from 'cors';
import chatRoutes from "./routes/chatRoutes";
import { ChatGroq } from "@langchain/groq";



const server = express();


//middlewares
server.use(express.json());
server.use(cors());
//routes
server.use(usuarioRouter);
server.use("/api", chatRoutes);
// async function init() {
//     const llm = new ChatOpenAI();
//     const response = await llm.invoke("Hello, world!");
//     console.log(response); // Solo si quieres ver la respuesta en la consola
// }
// init();


const model = new ChatGroq({
  model: "mixtral-8x7b-32768",
  temperature: 0
});

export default server;