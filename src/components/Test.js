import React from 'react'
import withWeather from './withWeather.js';

 const Test = ({ fetchWeather, props }) => {
  fetchWeather()
  .then(res => console.log(res));
  return (
    <div>
      <h2>Hi</h2>
    </div>
  )

}
const TestSuper = withWeather(Test);

export {Test, TestSuper};


