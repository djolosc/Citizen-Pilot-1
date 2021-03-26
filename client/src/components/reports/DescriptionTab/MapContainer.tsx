import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type mapProps = {
  latitude: number,
  longitude: number
}

const MapContainer: React.FC<mapProps> = ({latitude, longitude}) => {
  
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: latitude, lng: longitude
  }
  
  return (
     <LoadScript
       googleMapsApiKey="AIzaSyDqkdrEN9GApqXDhlcJPEeJahc_aPkGQoE"
>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >{<Marker key={defaultCenter.lat} position={defaultCenter}/>}</GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;