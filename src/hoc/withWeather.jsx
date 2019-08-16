/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// High Order Component for fetching weather data
const withWeather = (WrappedComponent) => {
  const fetchWeather = (location, units) =>
    // `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?${optionalParams}`
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/44ac77a2c728fd9b159d612f3f3b227f/${location.latitude},${location.longitude}?units=${units}`)
      .then((res) => res.json())
      .then((res) => res);
  return (props) => <WrappedComponent fetchWeather={fetchWeather} {...props} />;
};

export default withWeather;
