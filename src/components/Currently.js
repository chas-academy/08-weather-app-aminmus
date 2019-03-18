import React, { Component } from 'react';
import withWeather from '../hoc/withWeather.js';
import withGeolocation from '../hoc/withGeolocation.js';

// Component for current weather
class Currently extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchLocation = this.fetchLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  async fetchLocation() {
    const { getLocation } = this.props;

    const location = await getLocation();
    return location;
  }

  async getWeather(location) {
    const { fetchWeather } = this.props;
    let tempUnits = "si"; // Set default temperature unit to si (celsius)

    const weather = await fetchWeather(location, tempUnits);
    console.log(weather);
    return weather;
  }


  componentDidMount() {
    // Get the location and set it in State
    this.fetchLocation()
      .then(res => {
        this.setState({ location: res });
      });
  }

  componentDidUpdate() {
    this.getWeather(this.state.location);
  }

  render() {
    // If location is set in state, render location. Otherwise render loading indicator.
    let showLocation = this.state.location ?
      (<ul>
        <li>{this.state.location.latitude}</li>
        <li>{this.state.location.longitude}</li>
      </ul>) : (
        <p>Loading...</p>
      );

    return (
      <div>
        {showLocation}
      </div>
    );
  };
}


export default withGeolocation(withWeather(Currently));
