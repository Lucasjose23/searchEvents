import { GoogleGenerativeAI } from "@google/generative-ai";
import { EventObject } from "../models/EventObject";
const objectModel: EventObject = {
  name: "EVENT name",
  date: "date ",
  description: "",
};

export async function getAiObject(searchList: any[]) {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDJKzld9mvymviocUX7CSKNwwfN21w_kwU"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Please provide a pure JSON response without any code formatting (no json).
    - Use the object model provided: ${JSON.stringify(objectModel)}.
    - Filter the data in this list: ${JSON.stringify(searchList)}.
    - Extract a name for the event and a date from the filtered data.
    - Generate a relevant and concise description based on the filtered data.
    Make sure the output is in proper JSON format.
    `;

  const result = await model.generateContent(prompt);
  console.log(result.response.text().toString());
  return result.response.text();
}
