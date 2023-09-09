"use client";

import Select from "react-select";

import useCountries from "@/app/hooks/useCountries";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: string;
  onChange: (value: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  // const { getAll } = useCountries();

  return (
    <div>
      <input
        type="text"
        placeholder="Anywhere"
        value={value} // Use typedValue as the input value
        onChange={(e) => onChange(e.target.value)} // Update typedValue on input change
        className="text-lg p-3 border-2"
      />
    </div>
  );
};

export default CountrySelect;
