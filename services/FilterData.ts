import { getAiObject } from "../config/google-ai";
import { fetchGoogleResults, GoogleSearchResult } from "../config/google-search";
import { EventObject, EventShowObject } from "../models/EventObject";

export  async function filterData(search:string){
  
    let results: GoogleSearchResult[] = [];
    console.log(search)
    
      try {
        results = await fetchGoogleResults(search);
      } catch (error) {
        console.error(error);
      }
    
      const eventData = getAiObject(results.map((element) => {
        return {
          title: element.title,
          description: element.snippet
        }
      }));
      const finalResult:EventShowObject={
        eventObj:JSON.parse(await eventData),
        listLinks:[results[0].link,results[1].link]
        
      }
    
    return finalResult;
}