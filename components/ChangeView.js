import { useMap } from "react-leaflet";

export default function ChangeView({ center, zoom }) {
    const map = useMap();
    map.flyTo(center, zoom = 13, {
        duration: .75
    });
    return null;
}