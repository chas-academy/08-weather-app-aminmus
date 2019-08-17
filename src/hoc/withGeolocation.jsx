/* eslint-disable react/jsx-props-no-spreading */ // Because this is a HOC
import React from 'react';

// High Order Component for getting users location
const withGeolocation = (WrappedComponent) => {
  const getLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      },
    );
  });

  return (props) => (
    // Wrapped component with location inside state(?)
    <WrappedComponent getLocation={getLocation} {...props} />
  );
};

export default withGeolocation;
