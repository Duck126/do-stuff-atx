import React, { useContext, useEffect, useMemo } from "react";
import { Marker, Popup } from 'react-leaflet';
import { InfoContext } from '../components/InfoProvider';

const MapMarker = React.memo(() => {
    const {data} = useContext(InfoContext);
    
    return (
        <>
            {
                data.locData.map((item, index) => {
                    return (
                        <Marker
                            position={item.latlong}
                            draggable={false}
                            animate={true}
                            key={index}
                            className="Mapmarker"
                        >
                            {index}
                            <Popup className="Mappopup">
                                <p>{item.name}</p> 
                                <p>Address: {item.location}</p>
                            </Popup>
                        </Marker>
                    );
                })
            }
        </>
    )
}, []);

export default MapMarker;