"use client";
import React, { useState } from "react";
import styles from "../../styles/search.module.css";
import SearchInput from "./SearchInput";
import SearchBtn from "./SearchBtn";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import locationIcon from "./images/loc-icon.svg";
import rentIcon from "./images/rent-icon.svg";
import typeIcon from "./images/type-icon.svg";
import budgetIcon from "./images/dollar-icon.svg";

export default function Search() {
  const { searchBar } = styles;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      rentOrBuy: "Rent",
      houseType: "One bedroom",
      budget: "10k - 30k",
    },
  });

  const [hidden, setHidden] = useState(true);

  function handleMoreFilters(event: any) {
    event.preventDefault();
    setHidden((prev) => !prev);
  }

  return (
    <section className={searchBar}>
      <form>
        <CountrySelect
          // value={searchedLocation}
          onChange={() => {}}
          shadow
          id="location"
          Icon={locationIcon}
        />

        <Input
          id="rentOrBuy"
          label="Rent or Buy"
          // disabled={isLoading}
          register={register}
          errors={errors}
          required
          shadow
          hidden={hidden}
          Icon={rentIcon}
        />
        <Input
          id="houseType"
          label="Type of house"
          // disabled={isLoading}
          register={register}
          errors={errors}
          required
          shadow
          hidden={hidden}
          Icon={typeIcon}
        />
        <Input
          id="budget"
          label="My Budget"
          // disabled={isLoading}
          register={register}
          errors={errors}
          required
          shadow
          hidden={hidden}
          Icon={budgetIcon}
        />
        {/* <SearchInput value="Juja" label="I am looking for a house in..." /> */}
        {/* <SearchInput value="For Rent" label="RENT or buy ..." /> */}
        {/* <SearchInput value="One bedroom" label="type of house ..." /> */}
        {/* <SearchInput value="10K - 30K" label="MY Budget ..." /> */}
        <SearchBtn
          onClick={handleMoreFilters}
          label={hidden ? "More Filters" : "Search"}
        />
      </form>
    </section>
  );
}
