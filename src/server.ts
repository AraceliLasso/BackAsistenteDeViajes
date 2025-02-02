import express from "express";
import { ChatOpenAI } from "@langchain/openai";
import usuarioRouter from "./routes/usuarioRouter";
import cors from 'cors';


const server =express();


//middlewares
server.use(express.json());
server.use(cors());
//routes
server.use(usuarioRouter);

export default server;