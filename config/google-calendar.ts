

export  async function fetchCalendar() {
  const { GOOGLE_API_KEY, GOOGLE_CALENDAR_ID } = process.env;

  const url = `https://www.googleapis.com/calendar/v3/calendars/${GOOGLE_CALENDAR_ID}/events?key=${GOOGLE_API_KEY}`;
  const res = await fetch(url);
  

  if (!res.ok) {
    throw new Error('Failed to fetch search results');
  }

  const data = await res.json();
  return data.items || [];

}

export  async function addEventToGoogleCalendar(
    title: string,
    description: string,
    startDate: string, 
    endDate: string,  
  ) {
    const { GOOGLE_API_KEY, GOOGLE_CALENDAR_ID } = process.env;
  
    const url = `https://www.googleapis.com/calendar/v3/calendars/${GOOGLE_CALENDAR_ID}/events?key=${GOOGLE_API_KEY}`;
  
    const event = {
      summary: title,
      description,
      start: {
        dateTime: startDate, 
        timeZone: "UTC", 
      },
      end: {
        dateTime: endDate, 
        timeZone: "UTC",
      },
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error.message);
      }
  
      const data = await response.json();
      return data; 
    } catch (error: any) {
      console.error("Error creating event:", error.message);
      throw error;
    }
  };
  

