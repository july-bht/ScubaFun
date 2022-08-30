//KORT API - fra leaflet
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
//Kortnål image/icon
import icon from 'leaflet/dist/images/marker-icon.png';

//Lav ikon-kode
let ikonet = L.icon({
    iconUrl: icon,
    iconSize: [24, 36],
    iconAnchor: [12, 36]
})

let myMap, marker;

//skal modtage parameter med koordinater i formatet [ 56, 10 ]
export const lavKort = (koordinater) => {

    //Lav et basic kort

    //Er kortet lavet/skabt/initialized
    if ( !myMap ) {

        //Er kortet IKKE lavet/skabt/initialized
        myMap = L.map("kortdiv")
        L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        } ).addTo( myMap );

        // Tilføj marker til kortet med det rigtige ikon
        marker = L.marker( [56.36840614366134, 10.747420628835362], { icon: ikonet } ).addTo(myMap);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup1.").openPopup();
    }

        //marker.setLatLng( [56, 10] );
        myMap.setView( [56.36840614366134, 10.747420628835362], 16); //[lat, long], zoomfaktor

}