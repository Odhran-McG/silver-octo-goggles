import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const GoogleMapComponent = ({ lat, lng, apiKey, pins }) => {
    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    // Default to Belfast City Hall
    let belfastCityHallLat = 54.596484
    let belfastCityHallLon = -5.930053

    const defaultCenter = {
        lat: parseFloat(belfastCityHallLat),
        lng: parseFloat(belfastCityHallLon),
    };

    //  Belfast City Hall Latitude:	    54.596484
    //  Belfast City Hall Longitude:	-5.930053


    return (
        <LoadScript googleMapsApiKey={apiKey} pins={pins}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                {pins.map(({lat, lng}) => (
                    <MarkerF position={{lat, lng}} icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"/>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
