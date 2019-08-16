import React from 'react';

// Component for current weather
const Currently = ({ location }) => {
  // If location is set in state, render location. Otherwise render loading indicator.
  const showLocation = location
    ? (
      <ul>
        <li>{location.latitude}</li>
        <li>{location.longitude}</li>
      </ul>
    ) : (
      <p>Loading...</p>
    );

  return (
    <div>
      {showLocation}
    </div>
  );
};

export default Currently;
