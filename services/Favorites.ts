import { EventShowObject } from "../models/EventObject";

export function setFavorite(eventObj: EventShowObject) {
  if (typeof window !== "undefined") {
    let itemsList = JSON.parse(localStorage.getItem("itemsList")) || [];
    itemsList.push(eventObj);
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
    console.log("Updated List in localStorage:", itemsList);
  }
}

export function getFavoriteList() {
  if (typeof window !== "undefined") {
    let itemsList = JSON.parse(localStorage.getItem("itemsList")) || [];
    return itemsList;
  }
}

export function findFavoriteByName(name: string): boolean {
  if (typeof window !== "undefined") {
    const favoriteList = getFavoriteList();
    return favoriteList.find((fav) => fav?.eventObj?.name.includes(name))
      ? true
      : false;
  }
}

export function removeFavorite(name: string) {
  if (typeof window !== "undefined") {
    let itemsList = getFavoriteList();
    itemsList = itemsList.filter((fav) => !fav?.eventObj?.name.includes(name));
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }
}
