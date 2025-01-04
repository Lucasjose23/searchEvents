import { EventShowObject } from "../models/EventObject";

export function setFavorite(eventObj: EventShowObject) {
  let itemsList = JSON.parse(localStorage.getItem("itemsList")) || [];
  itemsList.push(eventObj);
  localStorage.setItem("itemsList", JSON.stringify(itemsList));
  console.log("Updated List in localStorage:", itemsList);
}

export  function getFavoriteList() {
    

  let itemsList = ( JSON.parse(localStorage.getItem("itemsList"))) || [];
  return itemsList;
}
