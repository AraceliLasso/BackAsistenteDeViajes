import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { chatModel } from "../config/openai";
import { getWeather } from "./climaService";

export async function getChatResponse(userMessage: string, city: string) {
  // Obtener el clima del destino
  const weather = await getWeather(city);
  const weatherText = weather
    ? `El clima en ${city} es de ${weather.temperature}°C con ${weather.description}.`
    : "No pude obtener el clima.";

  // Construir el mensaje con contexto
  const messages = [
    new SystemMessage("Eres un asistente de viajes experto en destinos."),
    new HumanMessage(`${userMessage} ${weatherText}`),
  ];

  // Invocar el modelo de lenguaje
  const response = await chatModel.invoke(messages);
  return response.content;
}
