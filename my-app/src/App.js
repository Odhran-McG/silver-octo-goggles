import './App.css';
import {useEffect, useState} from "react";
import GoogleMapComponent from "./components/googleMap";
import {Marker, MarkerF} from "@react-google-maps/api";

function App() {

    const [data, setData] = useState(null);
    const [apiKey, setApiKey] = useState(null);

    // comment out before comitting

    useEffect(() => {
        getGeocodeData()
    }, []);

    const markers = [
        {lat: 54.603455, lng: -5.92719},
        {lat: 54.585973, lng: -5.935736},
        {lat: 54.5822105407715, lng: -5.93643712997437}
    ]


    /**
     *
     * import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
     * import "./App.css";
     *
     * const App = () => {
     *   const { isLoaded } = useLoadScript({
     *     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
     *   });
     *   const markers = [
     *     { lat: 18.5204, lng: 73.8567 },
     *     { lat: 18.5314, lng: 73.8446 },
     *     { lat: 18.5642, lng: 73.7769 },
     *   ];
     *
     *   const onLoad = (map) => {
     *     const bounds = new google.maps.LatLngBounds();
     *     markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
     *     map.fitBounds(bounds);
     *   };
     *
     *   return (
     *     <div className="App">
     *       {!isLoaded ? (
     *         <h1>Loading...</h1>
     *       ) : (
     *         <GoogleMap mapContainerClassName="map-container" onLoad={onLoad}>
     *           {markers.map(({ lat, lng }) => (
     *             <Marker position={{ lat, lng }} />
     *           ))}
     *         </GoogleMap>
     *       )}
     *     </div>
     *   );
     * };
     *
     * export default App;
     */

    {
        markers.map(({lat, lng}) => (
            <Marker position={{lat, lng}}/>
        ))
    }

    const getGeocodeData = () => {
        fetch('./data/belfast_data_latest.json')
            .then(response => response.json())
            .then(data => {

                const geocodeData = []

                data.establishments.forEach((establishment) => {
                    const {geocode, BusinessName, RatingValue} = establishment;
                    const {latitude, longitude} = geocode;

                    geocodeData.push({
                        latitude,
                        longitude,
                        businessName: BusinessName,
                        ratingValue: RatingValue,
                    });
                });
                console.log(geocodeData)
                return geocodeData;
            })
            .catch(error => {
                console.error('Error reading and parsing data:', error);
            });
    }

    return (
        <div>
            <h1>Map</h1>
            <GoogleMapComponent lng={0} lat={0} apiKey={api_key} pins={markers}>
            </GoogleMapComponent>
        </div>
    )
}

export default App;
