export interface EventObject{
    name:string,
    date:string,
    description:string
}

export interface LinksEventObject{
    Link:string,
    secLink:string
}

export interface EventShowObject{
    eventObj:EventObject;
    ListLinks:LinksEventObject;
}