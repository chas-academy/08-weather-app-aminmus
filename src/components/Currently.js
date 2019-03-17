import React from 'react';
import withWeather from '../hoc/withWeather.js';
import withGeolocation from '../hoc/withGeolocation.js';

// Component for current weather
 const Currently = ({ getLocation, fetchWeather, props }) => {
   getLocation();
  fetchWeather()
  .then(res => {
    console.log(res);
  });
  return (
    <div>
    </div>
  )

}

export default withWeather(withGeolocation(Currently));


