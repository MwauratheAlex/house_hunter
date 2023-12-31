"use client";
import { useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
// import Search from "react-leaflet-search";
import MapSearchField from "./MapSearchField";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[];
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ center }) => {
  const bounds: L.LatLngBoundsExpression = [
    [-4.68, 33.5], // Southwestern corner of Kenya
    [5.5, 41.9], // Northeastern corner of Kenya
  ];

  return (
    <>
      <MapContainer
        center={(center as L.LatLngExpression) || [0, 37]}
        zoom={center ? 15 : 6}
        scrollWheelZoom={false}
        className="h-[50vh] rounded-lg"
        fadeAnimation={true}
        // maxBounds={bounds} // Add maxBounds prop here
      >
        <TileLayer url={url} attribution={attribution} />
        {center && <Marker position={center as L.LatLngExpression} />}
      </MapContainer>
    </>
  );
};

export default Map;
