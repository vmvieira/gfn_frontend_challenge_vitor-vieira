import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { currencyFormatter } from '../utils';
import styled from 'styled-components';
import RedMarker from '../assets/images/marker-red.png';
import BlueMarker from '../assets/images/marker-blue.png';
import L from 'leaflet';

const redMarker = new L.Icon({
  iconUrl: RedMarker,
  iconSize: new L.Point(24, 24)
});

const blueMarker = new L.Icon({
  iconUrl: BlueMarker,
  iconSize: new L.Point(24, 24)
});

export const StoresMap = ({ data, searchParams }) => {
  const minRevenue = searchParams.get('minRevenue');

  return (
    <StyledWrapper data-testid="storesMap">
      <MapContainer center={[-23.5874162, -46.6598276]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!!data.length &&
          data.map((eachObj) => (
            <Marker
              position={[eachObj.latitude, eachObj.longitude]}
              icon={eachObj.revenue < minRevenue ? redMarker : blueMarker}
              key={eachObj.name}>
              <Popup>
                <b>Nome:</b> {eachObj.name} <br />
                <b>Faturamento:</b> {currencyFormatter.format(eachObj.revenue)}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </StyledWrapper>
  );
};

export const StyledWrapper = styled.div`
  height: 450px;

  .leaflet-container {
    height: calc(100% - 44px);
  }
`;
