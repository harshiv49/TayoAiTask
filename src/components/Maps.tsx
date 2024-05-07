import React from 'react';
import { useQuery } from 'react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  tests: number;
}

const fetchCountryData = async (): Promise<CountryData[]> => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!response.ok) {
    throw new Error('Failed to fetch country data');
  }
  return response.json();
};

const Maps: React.FC = () => {
  const { data, isLoading, isError } = useQuery<CountryData[], Error>('countryData', fetchCountryData);

  const markerIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch country data</div>;

  return (
    <div>

    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        noWrap={true}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((country, index) => (
        <Marker key={index} position={[country.countryInfo.lat, country.countryInfo.long]} icon={markerIcon}>
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Cases: {country.cases}</p>
              <p>Deaths: {country.deaths}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Active: {country.active}</p>
              <p>Tests: {country.tests}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default Maps;
