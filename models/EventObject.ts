export interface EventObject{
    name:string,
    date:string,
    description:string
}



export interface EventShowObject{
    eventObj:EventObject;
    listLinks:string[];
}