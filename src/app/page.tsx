import { cookies } from 'next/headers';
import { fetchGoogleResults, GoogleSearchResult } from './api/google-search';
import { getAiObject } from './api/google-ai';





export default async function Home() {

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
  const filterData= JSON.parse(await eventData);


  return (
    <>
    <p>{filterData.name}</p>
    <p>{filterData.date}</p>
    <p>{filterData.description}</p>
     
    </>
  );
}

