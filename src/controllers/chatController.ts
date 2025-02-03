import { Request, Response } from "express";
import { getChatResponse } from "../services/chatService";

export const chatController = async (req: Request, res: Response): Promise<void> => {
  const { message, city } = req.body;

  if (!message || !city) {
    res.status(400).json({ error: "Se requieren 'message' y 'city'" });
    return;
  }

  try {
    const response = await getChatResponse(message, city);
    res.json({ response });
  } catch (error) {
    console.error("Error en el chatbot:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
