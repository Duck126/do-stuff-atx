import React from "react";
import dynamic from "next/dynamic";
import { createContext, useState } from "react";
import styles from '../styles/Home.module.css'
import EventList from '../components/EventList'
import InfoContext from "../components/InfoProvider";
import SwimData from '../components/data/SwimData';

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
  });

  return (
    <div className={styles.main}>
      
        
        <div id="map" className={styles.map}  >
          <MapWithNoSSR />
        </div>
      
    </div>
  );
}
