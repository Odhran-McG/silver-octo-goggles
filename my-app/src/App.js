import './App.css';
import {useEffect, useState} from "react";
import FoodRatingsApi from "./api/FoodRatingsApi";
import GoogleMapComponent from "./googleMap";

function App() {

    const [data, setData] = useState(null);
    const [apiKey, setApiKey] = useState(null);

    useEffect(() => {
        fetchBelfastData();
    }, []);

    const fetchBelfastData = async () => {
        const response = await FoodRatingsApi.fetchBelfastEstablishments();
        setData(response.establishments);
        console.log('data retrieved')
        console.log(response)
    }

    // fetch API key from JSON file
    fetch('./secret/keys.json')
        .then(response => response.json())
        .then(data => {
            setApiKey(data.google_maps_key);
            console.log('Saved api key');
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    // pins
    const pins = [
        { lat: 40.712776, lng: -74.005974 }, // Example pin 1
        { lat: 34.052235, lng: -118.243683 }, // Example pin 2
        // Add more pins here
    ];

    sortPins = () => {
        if(data != null){

        }
    }



    return (
        <div>
            <h1>Map</h1>
            <GoogleMapComponent lng={0} lat={0} apiKey={apiKey}></GoogleMapComponent>
        </div>
    )
        ;
}

export default App;
