import React, { useContext, useEffect, useRef } from "react";
import { Marker, Popup} from 'react-leaflet';
import { InfoContext } from '../components/InfoProvider';

const MapMarker = React.memo(() => {
    const { data } = useContext(InfoContext);
    const markerRef = useRef(new Array());
    const currentMarker = data.activeItem;

    useEffect(() => {
        markerRef.current[currentMarker].openPopup();
    },[]);

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
                            //Make a Ref for each item in the array***
                            ref={(Element) => markerRef.current.push(Element)}
                        >
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