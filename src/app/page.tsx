"use client";

import { SetStateAction, useState } from "react";
import FormComponent from "../../components/Form";
import { filterData } from "../../services/FilterData";
import { EventShowObject } from "../../models/EventObject";
import { setFavorite } from "../../services/Favorites";

export default  function Home() {
  const [searchValue, setSearchValue] = useState(""); // State to hold search input
  const [result, setResult] = useState<EventShowObject>();
  const handleSearchSubmit = async (value: SetStateAction<string>) => {
    setSearchValue(value); // Update state with the submitted search value
    console.log(value)
    setResult(await filterData(value.toString())) ;
  };

  return (
    <>
      <h1>Search Page</h1>
      <FormComponent onSubmit={handleSearchSubmit} />
      {result && (
        <div>
          <h2>Search Result:</h2>
          <p>{searchValue}</p>
          <p>{result.eventObj.date}</p>
          <p>{result.eventObj.description}</p>
          <p>{result.listLinks[0]}</p>
          <p>{result.listLinks[1]}</p>
          <button onClick={()=>{setFavorite(result)}}>Favoritar</button>
        </div>
      )}
    </>
  );
}
