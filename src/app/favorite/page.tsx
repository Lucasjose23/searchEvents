"use client";
import { getFavoriteList } from "../../../services/Favorites";

const FavoritePage =   () => {
    const favoriteList=  getFavoriteList();
    console.log(favoriteList)
  return <>
    <h1>Favorite List</h1>
      {favoriteList.length > 0 ? (
        <ul>
          {favoriteList.map((item, index) => (
            <li key={index}>
              <h3>{item.eventObj.name}</h3>
              <p>{item.eventObj.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}

    </>;
};

export default FavoritePage;
