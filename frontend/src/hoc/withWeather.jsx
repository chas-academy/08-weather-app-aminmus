/* eslint-disable react/jsx-props-no-spreading */ // Because this is a HOC
import React from 'react';

// High Order Component for fetching weather data
const withWeather = (WrappedComponent) => {
  const fetchWeather = async (location, units) => {
    try {
      // TODO: Add server root url for production here
      const url = `/api/weather/${location.latitude}/${location.longitude}/${units}`;
      const weather = await fetch(url);

      return await weather.json();
    } catch (error) {
      return console.error(error.message);
    }
  };
  return (props) => <WrappedComponent fetchWeather={fetchWeather} {...props} />;
};

export default withWeather;
