import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export default function Map() {
  // Properties
  const coordinates = [59.8588456, 17.6366069];
  const mapIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer center={[59.8588456, 17.6366069]} zoom={17}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Not that is bad, but to make it look better, create a propery called mapIcon and pass it here */}
      <Marker position={coordinates} icon={mapIcon}>
        <Popup>Pepper. Vegan restaurant</Popup>
      </Marker>
    </MapContainer>
  );
}
