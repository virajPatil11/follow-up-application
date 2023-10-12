import React, { useState } from 'react';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div>
      <h2>Location Access</h2>
      <button onClick={getLocation}>Get Location</button>
      {latitude && longitude && (
        <div>
          Latitude: {latitude}
          <br />
          Longitude: {longitude}
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default LocationComponent;
