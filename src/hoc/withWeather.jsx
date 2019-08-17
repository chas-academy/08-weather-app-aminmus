/* eslint-disable react/jsx-props-no-spreading */ // Because this is a HOC
import React from 'react';

// High Order Component for fetching weather data
// `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?${optionalParams}`
const withWeather = (WrappedComponent) => {
  const fetchWeather = async (location, units) => {
    try {
      const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/44ac77a2c728fd9b159d612f3f3b227f/${location.latitude},${location.longitude}?units=${units}`;
      const weather = await fetch(url);

      return weather.json();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (props) => <WrappedComponent fetchWeather={fetchWeather} {...props} />;
};

export default withWeather;
