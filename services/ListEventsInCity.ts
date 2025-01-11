import { EventShowObject } from "../models/EventObject";

export  async function listEventsInCity(city="Alfenas MG Brazil"){
    let listOfEvents: EventShowObject[]=[]
    for (let index = 0; index < 10; index++) {
        const today = new Date();
        const date=  new Date(today.getTime() + ((24*index) * 60 * 60 * 1000));
        const testeEvento:EventShowObject={
            eventObj:{
                name:"teste",
                description:"teste",
                date:date.toString()
            },listLinks:[]

        }
        listOfEvents.push(testeEvento)
        
    }
    console.log(listOfEvents);
    return listOfEvents;
}