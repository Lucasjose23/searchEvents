"use client";

import { FormEvent } from "react";
import SearchInputComponent from "./SearchInput";
import ButtonComponent from "./Button";

const FormComponent = ({ onSubmit }) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get("search"); // Access input value

    if (onSubmit) {
      onSubmit(searchValue); // Pass the value to the parent component
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInputComponent />
      <ButtonComponent />
    </form>
  );
};

export default FormComponent;
