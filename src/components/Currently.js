import React from 'react'
import withWeather from '../hoc/withWeather.js';

// Component for current weather
 const Currently = ({ fetchWeather, props }) => {
  fetchWeather()
  .then(res => {
    console.log(res);
  });
  return (
    <div>
    </div>
  )

}

export default withWeather(Currently);


