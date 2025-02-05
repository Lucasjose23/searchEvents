"use client";
import FavCardComponent from "../../../components/FavCard";
import { getFavoriteList } from "../../../services/Favorites";

const FavoritePage = () => {
  const favoriteList = getFavoriteList();

  return (
    <>
      <h1 className="text-2xl text-center w-100 mt-8 mb-8 ">Favorite List</h1>
      {favoriteList?.length > 0 ? (
        <div className="md:grid md:grid-cols-3 md:gap-8 mb-8 flex flex-wrap text-center">
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
