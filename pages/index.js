import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { createContext, useState } from "react";
import styles from '../styles/Home.module.css'
import { InfoContext } from "../components/InfoProvider";
import SwimData from "../components/data/SwimData";
import EventList from "../components/EventList";




export default function Home() {

  const [data, setData] = useState(SwimData);


  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
  });

  return (
    <div className={styles.main}>
      <div id="map" className={styles.map}  >
        <InfoContext.Provider value={{ data, setData }}>

          <MapWithNoSSR />
          <EventList/>
        </InfoContext.Provider>

      </div>

    </div>
  );
}
