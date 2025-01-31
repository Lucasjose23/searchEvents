import { EventShowObject } from "../models/EventObject";

export function setFavorite(eventObj: EventShowObject) {
  let itemsList = JSON.parse(localStorage.getItem("itemsList")) || [];
  itemsList.push(eventObj);
  localStorage.setItem("itemsList", JSON.stringify(itemsList));
  console.log("Updated List in localStorage:", itemsList);
}

export function getFavoriteList() {
  let itemsList = JSON.parse(localStorage.getItem("itemsList")) || [];
  return itemsList;
}

export function findFavoriteByName(name: string): boolean {
  const favoriteList = getFavoriteList();
  return favoriteList.find((fav) => fav?.eventObj?.name.includes(name))
    ? true
    : false;
}
