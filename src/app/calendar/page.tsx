import {
  addEventToGoogleCalendar,
  fetchCalendar,
} from "../../../config/google-calendar";
import { listEventsInCity } from "../../../services/ListEventsInCity";

const CalendarPage = async () => {
  let result = "";
  try {
    result = await fetchCalendar();
  } catch (error) {
    console.error(error);
  }
  console.log(result);

  const title = "Meeting with Team";
  const description = "Discuss the Q1 roadmap and deliverables.";
  const startDate = "2025-01-15T10:00:00Z"; // Replace with your start date
  const endDate = "2025-01-15T11:00:00Z"; // Replace with your end date

  try {
    const event = await addEventToGoogleCalendar(
      title,
      description,
      startDate,
      endDate
    );
    console.log("Event saved:", event);
  } catch (error) {
    console.error("Failed to save event:", error);
  }
  const eventos=listEventsInCity();
  

  return (
    <>
      <h1>Calendar page</h1>
      <div>
        <h2>eventp</h2>
        <p></p>
        <p>Nome</p>
        <p>Data</p>
        <p>Descriçao</p>
        <p></p>
        <button className="btn-primary">Adicionar no calendario</button>
      </div>
      <div>
        <h2>eventp</h2>
        <p></p>
        <p>Nome</p>
        <p>Data</p>
        <p>Descriçao</p>
        <p></p>
        <button className="btn-primary">Adicionar no calendario</button>
      </div>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&src=bHVjYXNqb3NlZGV2QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043&color=%230B8043"
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </>
  );
};

export default CalendarPage;
