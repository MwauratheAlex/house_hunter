"use client";

import { useEffect, useState } from "react";
import DebounceInput from "react-debounce-input";

import Select from "react-select";

import useCountries from "@/app/hooks/useCountries";
// import
// import { OpenStreetMapProvider } from 'leaflet-geosearch';
const leafletGeosearch = require("leaflet-geosearch");
const { GeoSearchControl, OpenStreetMapProvider } = leafletGeosearch;

export type CountrySelectValue = {
  flag: string;
  // label: string;
  latlng: number[];
  region: string;
  value: string;

  x: number;
  y: number;
  label: string;
};

interface CountrySelectProps {
  value?: string;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  // const { getAll } = useCountries();
  // setup
  const provider = new OpenStreetMapProvider();

  const [results, setResults] = useState<CountrySelectValue[]>([]);
  const [searchSting, setSearchString] = useState("");
  console.log(results);

  // Create a variable to store the timeout ID
  let timeoutId: any;
  // Function to fetch results
  const fetchResults = async (query: string) => {
    const results = await provider.search({ query });
    setResults(results);
  };

  // search
  useEffect(() => {
    // Clear any previous timeouts
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      fetchResults(searchSting);
    }, 250);
  }, [searchSting]);
  //

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder=" "
        value={searchSting} // Use typedValue as the input value
        onChange={(e) => setSearchString(e.target.value)} // Update typedValue on input change
        // className="text-lg p-3 border-2"
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed`}
      />

      <label
        className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        left-4
        z-10
        origin-[0]
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        text-zinc-400
      `}
      >
        Anywhere
      </label>

      {results.length > 0 && (
        <div className="flex flex-col items-start gap-3 bg-gray-50 fixed z-[10000] w-fit p-3 pr-10 rounded-md cursor-pointer ">
          {results.map((result) => (
            <p
              className="text-neutral-500 ml-1 'text-lg'"
              onClick={() => {
                onChange(result);
                setResults([]);
              }}
            >
              {result.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
