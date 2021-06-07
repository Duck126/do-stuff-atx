import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import EventList from '../components/EventList';
import { useState } from "react";
import SwimData from "../components/data/SwimData";
import { InfoContext } from "../components/InfoProvider";
import MapMarker from "./MapMarker";


const Map = () => {

  const [data, setData] = useState(SwimData);
  
  const mapKey = process.env.NEXT_PUBLIC_MAP_TOKEN;
  

  return (
    <MapContainer
      center={[30.2672, -97.7431]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", display: "flex" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/duck126/ckoygu3z7141917r50sbhfea2/tiles/256/{z}/{x}/{y}@2x?access_token=` + `${mapKey}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <InfoContext.Provider value={{ data, setData }}>
        <MapMarker />
        <EventList />
      </InfoContext.Provider>
    </MapContainer>
  );
};

export default Map;
