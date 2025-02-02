"use client";
import { useState } from "react";
import { findFavoriteByName, setFavorite } from "../services/Favorites";

const CardComponent = ({ eventShow }) => {
  const [fav,setFav]=useState(false);

  return (
    <div className=" bg-gray-200 max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {eventShow.eventObj.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {eventShow.eventObj.date}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {eventShow.eventObj.description}
      </p>
      <div className="flex justify-evenly ">
        <a
          href={eventShow.listLinks[0]}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
        {!findFavoriteByName(eventShow.eventObj.name) && !fav  ? (
          <button
            onClick={() => {setFavorite(eventShow);setFav(true)}}
            className="flex justify-between items-center  text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 ml-2 text-center me-2  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
          >
            <div>Add to Favorite List</div>
            <div className="icon ml-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 16.8L5.5 21L7.5 13.5L2 9H9L12 2Z" />
              </svg>
            </div>
          </button>
        ) : (
          <div className="flex justify-center">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="gold"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 16.8L5.5 21L7.5 13.5L2 9H9L12 2Z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
