"use client";

import { SetStateAction, useState } from "react";
import FormComponent from "../../components/Form";
import { filterData } from "../../services/FilterData";
import { EventShowObject } from "../../models/EventObject";
import { setFavorite } from "../../services/Favorites";
import CardComponent from "../../components/Card";

export default function Home() {
  const [searchValue, setSearchValue] = useState(""); // State to hold search input
  const [result, setResult] = useState<EventShowObject>();
  const handleSearchSubmit = async (value: SetStateAction<string>) => {
    setSearchValue(value); // Update state with the submitted search value
    console.log(value);
    setResult(await filterData(value.toString()));
  };

  return (
    <>
      <div className="container  text-center h-full">
        <h1 className="mt-8">Search for events, holidays and festivities!</h1>
        <div className="mx-auto mt-4">
          <FormComponent onSubmit={handleSearchSubmit} />
        </div>
        <div className="w-full text-center mt-4">
          {result && <CardComponent eventShow={result}></CardComponent>}
        </div>
      </div>
    </>
  );
}
