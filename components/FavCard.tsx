import { findFavoriteByName, removeFavorite, setFavorite } from "../services/Favorites";

const FavCardComponent = ({ eventShow }) => {
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

        <button
          onClick={() => {
            removeFavorite(eventShow.eventObj.name);
            window.location.reload();

          }}
          className="flex justify-between items-center  text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 ml-2 text-center me-2  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
        >
          <div>Remove to Favorite List</div>
          <div className="icon ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6M5 6h14l-1 14H6L5 6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FavCardComponent;
