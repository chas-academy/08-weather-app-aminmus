import React from 'react'

// High Order Component for fetching weather data
const withWeather = WrappedComponent => {
  const fetchWeather = (location) => {

    // `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
    return   fetch('https://cors.io/?https://api.darksky.net/forecast/44ac77a2c728fd9b159d612f3f3b227f/59.329323,18.068581')
    .then(res => res.json())
    .then(res => {
      return res;
    });
  };
  return props => <WrappedComponent fetchWeather={fetchWeather} {...props} />;
};

export default withWeather;
 