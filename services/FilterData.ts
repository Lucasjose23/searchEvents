import { getAiObject } from "../config/google-ai";
import { fetchGoogleResults, GoogleSearchResult } from "../config/google-search";

export  async function filterData(){
  
    let results: GoogleSearchResult[] = [];
    
    
      try {
        results = await fetchGoogleResults("encontro de moto boca raton florida");
      } catch (error) {
        console.error(error);
      }
    
      const eventData = getAiObject(results.map((element) => {
        return {
          title: element.title,
          description: element.snippet
        }
      }));
    return JSON.parse(await eventData);;
}