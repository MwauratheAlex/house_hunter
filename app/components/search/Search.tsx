import React from "react";
import styles from "../../styles/search.module.css";
import SearchInput from "./SearchInput";
import SearchBtn from "./SearchBtn";

export default async function Search() {
  const { searchBar } = styles;

  return (
    <section className={searchBar}>
      <form>
        <SearchInput value="Juja" label="I am looking for a house in..." />
        <SearchInput value="For Rent" label="RENT or buy ..." />
        <SearchInput value="One bedroom" label="type of house ..." />
        <SearchInput value="10K - 30K" label="MY Budget ..." />
        <SearchBtn />
      </form>
    </section>
  );
}
