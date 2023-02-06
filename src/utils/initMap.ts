import { Map } from 'mapbox-gl';

export const initMap = (container: HTMLDivElement, coords: [number, number]) => {

    return new Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v11',
        // style: 'mapbox://styles/mapbox/satellite-v9',
        pitchWithRotate: false,
        center: coords,
        zoom: 5,
        accessToken: "pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg",
        doubleClickZoom: false
    });
}
