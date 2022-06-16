import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 47.4150024879677,
  lng: 40.092543215763236
};

export const CustomMap = () => {
  const [path, setPath] = useState([
    { lat: 47.399552861460265, lng: 40.09089921099906 },
    { lat: 47.41360424316778, lng: 40.07160052777495 },
    { lat: 47.431986397052, lng: 40.07000692490871 },
    { lat: 47.430879815595006, lng: 40.10112054948148 },
    { lat:  47.4182850671735, lng: 40.12291036289893 },
    { lat:   47.406826780891606, lng: 40.123425347029794 },
  ]);

  const [zoom, setZoom] = useState(0)
  const [map, setMap] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setZoom(13)
    }, 1000);
  }, [])


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAN3Ct7JfifuIzsXSbuli2QWWXuVchWUdo"
  })

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        version="weekly"
      >
        <Polygon
          path={path}
        />
      </GoogleMap>
  ) : <></>
}
