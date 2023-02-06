import {Popup, Marker, Map} from "mapbox-gl";

export const generateNewMarker = ({lat, lng, map,}: {
    lng: number;
    lat: number;
    map: Map;
}) => {
    new Marker({color: "#ff0000", scale: 1.5})
        .setLngLat([lng, lat]) // set the marker position
        .setPopup(
            new Popup({offset: 25}) // add popups
                .setHTML(
                    '<label for="colorWell">Color:</label>\n' +
                    '<input type="color" value="#ff0000" name="markersssss" id="colorWell" ' +
                    'class="pickMe" onchange="changeColor()"/>'
                )
        )
        .addTo(map);
};

