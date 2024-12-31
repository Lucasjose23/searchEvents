import { GoogleGenerativeAI } from "@google/generative-ai";
import { EventObject } from "../models/EventObject";
const objectModel:EventObject={
    name:'EVENT name',
    date:'date ',
    description:''

}

export async function getAiObject(searchList:any[]) {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY||"");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "I want in the response just a pure JSON(REMOVE THE ```json ``` ) based in this one ="+JSON.stringify(objectModel)+" filtering the data in this list, try to get a name for this event and a date based in this list="+JSON.stringify(searchList)+" also create only one good description based in the list.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text().toString())
    return result.response.text();
}