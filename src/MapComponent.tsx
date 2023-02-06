import "mapbox-gl/dist/mapbox-gl.css"
import {useEffect, useRef} from "react";
import  {Map} from "mapbox-gl";
import {initMap} from "./utils/initMap";
import {generateNewMarker} from "./utils/generateNewMarkers";


const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [3, 40],
  [16, 56],
]

const MapComponent = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInitRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapInitRef.current = initMap(mapRef.current, [13.3777, 52.5163]);

    }

  }, []);
  useEffect(() => {
    if (mapInitRef.current) {
      fetch("https://restcountries.com/v3.1/capital/Berlin")
          .then((res) => res.json())
          .then((data) => {
            generateNewMarker({
              map: mapInitRef.current!,
              lng: data[0].latlng[1],
              lat: data[0].latlng[0],
            });
          });
      fetch("https://restcountries.com/v3.1/capital/Paris")
          .then((res) => res.json())
          .then((data) => {
            generateNewMarker({
              map: mapInitRef.current!,
              lng: data[0].latlng[1],
              lat: data[0].latlng[0],
            });
          });
      fetch("https://restcountries.com/v3.1/capital/Brussels")
          .then((res) => res.json())
          .then((data) => {
            generateNewMarker({
              map: mapInitRef.current!,
              lng: data[0].latlng[1],
              lat: data[0].latlng[0],
            });
          });
    }
  }, []);
  return <div ref={mapRef} className="map" />;
}

export default MapComponent
