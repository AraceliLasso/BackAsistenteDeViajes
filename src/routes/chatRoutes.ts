import { Router } from "express";
import { chatController } from "../controllers/chatController";

const chatRoutes = Router();

chatRoutes.post("/chat", chatController);

export default chatRoutes;
