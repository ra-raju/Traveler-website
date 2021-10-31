import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';
import './Map.css';

const Map = () => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoicm9iZXlvdWwiLCJhIjoiY2t1ejZwbHZmMG0zcTJ4cGIzcGMwM3U1bCJ9.gP8ShNRb7hfGUK0facK-Ow';
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [88.63764, 24.3683],

      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      'top-left'
    );
  }, []);

  return (
    <div className="map-section">
      <div id="map"></div>
    </div>
  );
};

export default Map;
