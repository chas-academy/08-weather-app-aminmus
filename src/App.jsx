import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Currently from './components/Currently';
import withWeather from './hoc/withWeather';
import withGeolocation from './hoc/withGeolocation';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempUnits: 'si',
    };

    // Only need to bind if we actually pass these functions to an element or component
    this.setWeather = this.setWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  async componentDidMount() {
    // Get the location and set it in State
    this.setLocation();
  }

  async componentDidUpdate() {
    // TODO: Change below to allow setting a new weather on location switch
    const { location, weather } = this.state;

    // This prevents making unnecessary API calls
    if (location && !weather) {
      this.setWeather(location);
      console.log('location set');
    } else {
      console.log('location already set, no new weather will be set');
    }
  }

  // Set weather in state
  async setWeather(location) {
    const { fetchWeather } = this.props;
    const { tempUnits } = this.state;
    try {
      const weather = await fetchWeather(location, tempUnits);
      this.setState({ weather });

      return console.log('Weather', weather);
    } catch (error) {
      return console.error(error);
    }
  }

  // Set location in state
  async setLocation() {
    const { fetchLocation } = this.props;
    try {
      const location = await fetchLocation();
      this.setState({ location });

      return console.log('Location', location);
    } catch (error) {
      return console.error(error.message);
    }
  }

  render() {
    const { location, weather, tempUnits } = this.state;

    return (
      <div className="App">
        <Currently
          location={location}
          weather={weather}
          tempUnits={tempUnits}
        />
      </div>
    );
  }
}

App.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  fetchLocation: PropTypes.func.isRequired,
};

export default withGeolocation(withWeather(App));
