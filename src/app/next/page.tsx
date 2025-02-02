const NextPage = () => {
  return (
    <>
      <h1 className="text-2xl text-center w-100 mt-8 mb-8 ">
        Plans for the future!
      </h1>
      <div className="  mb-8 bg-gray-200 w-90 mx-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <ul className="space-y-3 p-4  shadow-lg rounded-2xl  max-w-md mx-auto">
            <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg ">Add google oauth 2.0 api</li>
            <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">Create a login and profile system</li>
            <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg ">Create a mongoDB database to add users and favorites</li>
            <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg ">Create a new button in the favorite cards to add a event to calendar</li>
            <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg ">Configure the google calendar api</li>      
        </ul>
      </div>
    </>
  );
};

export default NextPage;
