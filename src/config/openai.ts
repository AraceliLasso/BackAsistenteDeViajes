import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatGroq } from "@langchain/groq";


dotenv.config();

export const chatModel = new ChatOpenAI({
  modelName: "gpt-4",
  openAIApiKey: process.env.OPENAI_API_KEY,
});



//___________________________________________________


const model = new ChatGroq({
  model: "mixtral-8x7b-32768",
  temperature: 0
});
const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

async function main() {
  const response= await model.invoke(messages);
  console.log(response);
}
main()