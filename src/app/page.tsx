import { cookies } from 'next/headers';
import { fetchGoogleResults, GoogleSearchResult } from './api/google-search';





export default async function Home() {

  let results: GoogleSearchResult[] = [];


  try {
    results = await fetchGoogleResults("carros na web");
  } catch (error) {
    console.error(error);
  }


  return (
    <>


      <ul >
        {results.map(
          (result) =>(
            <li >
              <a href={result.link} target="_blank" rel="noopener noreferrer">
                <h3>{result.title}</h3>
                <p >{result.snippet}</p>
              </a>
            </li>
          )

        )}
      </ul>
    </>
  );
}

