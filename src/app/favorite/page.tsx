"use client";
import FavCardComponent from "../../../components/FavCard";
import { getFavoriteList } from "../../../services/Favorites";

const FavoritePage = () => {
  const favoriteList = getFavoriteList();
  console.log(favoriteList);
  return (
    <>
      <h1 className="text-2xl text-center w-100 mt-8 mb-8 ">Favorite List</h1>
      {favoriteList.length > 0 ? (
        <div className="grid grid-cols-3 gap-8 mb-8">
          {favoriteList.map((item, index) => (
            <FavCardComponent key={index} eventShow={item}></FavCardComponent>
          ))}
        </div>
      ) : (
        <p className="mt-8 mb-8">No favorites added yet.</p>
      )}
    </>
  );
};

export default FavoritePage;
