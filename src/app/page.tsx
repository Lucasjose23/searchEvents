"use client";
import { SetStateAction, useState } from "react";
import FormComponent from "../../components/Form";
import { filterData } from "../../services/FilterData";
import { EventShowObject } from "../../models/EventObject";
import CardComponent from "../../components/Card";

export default function Home() {

  const [searchValue, setSearchValue] = useState(""); 
  const [result, setResult] = useState<EventShowObject>();
  const handleSearchSubmit = async (value: SetStateAction<string>) => {
    setSearchValue(value); 
    console.log(value);
    setResult(await filterData(value.toString()));
  };

  return (
    <>
      <div className="container  text-center h-full">
        <h1 className="text-2xl mt-8">Search for events, holidays and festivities!</h1>
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
