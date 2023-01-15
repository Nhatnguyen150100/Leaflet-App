import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCenter = [21.042774,105.84438];
const defaultZoom = 12;
function MapLeaflet() {
  return <MapContainer center={defaultCenter} zoom={defaultZoom} zoomControl={false}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
}

export default MapLeaflet;
