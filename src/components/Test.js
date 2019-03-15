import React from 'react'
import withWeather from './withWeather.js';

export const Test = ({ fetchWeather, props }) => {
  // const makeFetch = () => fetchWeather.then(res => console.log(res));
  fetch('https://cors.io/?https://api.darksky.net/forecast/44ac77a2c728fd9b159d612f3f3b227f/59.329323,18.068581')
  .then(res => res.json())
  .then(res => console.log(res));

  return (
    <div>
      <h2>Hi</h2>
    </div>
  )

  

  // const getWeather = async () => {
  //   const weather = await fetchWeather();
  //   console.log(weather);
  // }
  // getWeather();

}
  export default withWeather(Test);

