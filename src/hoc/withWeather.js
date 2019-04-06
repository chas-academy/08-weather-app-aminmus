import React from 'react';

// High Order Component for fetching weather data
const withWeather = WrappedComponent => {
  const fetchWeather = (location, units) => {
    // `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?${optionalParams}`
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/44ac77a2c728fd9b159d612f3f3b227f/${location.latitude},${location.longitude}?units=${units}`)
      .then(res => res.json())
      .then(res => {
        return res;
      });
  };
  return props => <WrappedComponent fetchWeather={fetchWeather} {...props} />;
};

export default withWeather;
