import { useEffect } from "react";
import { useMap } from "react-leaflet";

const leafletGeosearch = require("leaflet-geosearch");
const { GeoSearchControl, OpenStreetMapProvider } = leafletGeosearch;

const SearchField = () => {
  const provider = new OpenStreetMapProvider();

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    // position: "top",
    // style: "bar",
    // autoComplete: true, // optional: true|false  - default true
    // autoCompleteDelay: 250, // optional: number      - default 250
  });

  const map = useMap();
  useEffect((): any => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

export default SearchField;
