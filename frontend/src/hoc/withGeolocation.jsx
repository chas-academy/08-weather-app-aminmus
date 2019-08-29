/* eslint-disable react/jsx-props-no-spreading */ // Because this is a HOC
import React from 'react';

// High Order Component for getting users location
const withGeolocation = (WrappedComponent) => {
  const fetchLocation = () => new Promise((resolve, reject) => {
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

  return (props) => <WrappedComponent fetchLocation={fetchLocation} {...props} />;
};

export default withGeolocation;
