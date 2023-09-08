import { useEffect } from "react";
import { useMap } from "react-leaflet";

const leafletGeosearch = require("leaflet-geosearch");
const { GeoSearchControl, OpenStreetMapProvider } = leafletGeosearch;

const SearchField = () => {
  const provider = new OpenStreetMapProvider();

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
  });

  const map = useMap();
  useEffect((): any => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

export default SearchField;
