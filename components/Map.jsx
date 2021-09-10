import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import React, { useState, useEffect, useContext, useMemo, useRef } from "react";
import SwimData from "./data/SwimData";
import MapMarker from "./MapMarker";
import { InfoContext } from "./InfoProvider";
import ChangeView from "./ChangeView";

const Map = React.memo(() => {
  const mapKey = process.env.NEXT_PUBLIC_MAP_TOKEN;

  const {data} = useContext(InfoContext);

  return (
    <MapContainer
        center={[30.2672,-97.7431]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100vw", display: "flex" }}
      >
        <ChangeView center={data.locData[data.activeItem].latlong}/>
        <TileLayer
          url={
            `https://api.mapbox.com/styles/v1/duck126/ckoygu3z7141917r50sbhfea2/tiles/256/{z}/{x}/{y}@2x?access_token=` +
            `${mapKey}`
          }
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <MapMarker />
      </MapContainer>
  );
});

export default Map;
