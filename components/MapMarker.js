import { useContext } from "react";
import { Marker, Popup } from 'react-leaflet';
import { InfoContext } from '../components/InfoProvider';

const MapMarker = () => {
    const {data} = useContext(InfoContext);
    console.log(data);
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <Marker
                            position={item.latlong}
                            draggable={true}
                            animate={true}
                            key={index}
                            className="Mapmarker"
                        >
                            <Popup className="Mappopup">
                                {item.name}
                                {item.location}
                            </Popup>
                        </Marker>
                    );
                })
            }
        </>
    )
}

export default MapMarker;