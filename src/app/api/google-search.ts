export interface GoogleSearchResult {
    title: string;
    link: string;
    snippet: string;
  }
export async function fetchGoogleResults(query: string): Promise<GoogleSearchResult[]> {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY!;
    const GOOGLE_CX = process.env.GOOGLE_CX!;
  
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}`
    );
  
    if (!res.ok) {
      throw new Error('Failed to fetch search results');
    }
  
    const data = await res.json();
    return data.items || [];
  }