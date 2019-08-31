import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withWeather from './hoc/withWeather';
import withGeolocation from './hoc/withGeolocation';
import Currently from './components/Currently';
import Periodicals from './components/Periodicals';
import Dailies from './components/Dailies';
import LoadingIndicator from './components/LoadingIndicator';
import Header from './components/Header';
import reverseGeo from './utils/reverseGeo';

const AppContainer = styled.div`
  color: #d3c1c3;

  height: 100%;
  width: 100%;
  
  h1, h2, h3 {
    color: #FFEAEE;
  }

  > * {
    margin: 0 .5rem;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: 'si',
    };

    // Only need to bind if we actually pass these functions to an element or component
    this.setWeather = this.setWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    // Get the location and set it in State
    const location = await this.setLocation();
    this.setWeather(location);
    this.setAddress(location);
  }

  componentDidUpdate(prevProps, prevState) {
    const { units, location } = this.state;

    console.log('updated');
    if (units !== prevState.units) {
      this.setWeather(location);
    }
  }

  // Set weather in state
  async setWeather(location) {
    try {
      const { fetchWeather } = this.props;
      const { units } = this.state;
      const weather = await fetchWeather(location, units);
      this.setState({ weather });

      return console.log('Weather', weather);
    } catch (error) {
      return console.error(error);
    }
  }

  // Set location in state
  async setLocation() {
    try {
      const { fetchLocation } = this.props;
      const location = await fetchLocation();
      this.setState({ location });

      console.log('Location', location);
      return location;
    } catch (error) {
      return console.error(error.message);
    }
  }

  async setAddress(location) {
    try {
      const { latitude, longitude } = location;
      const address = await reverseGeo(latitude, longitude);
      this.setState({ address });

      return console.log('Address', address);
    } catch (error) {
      return console.error(error.message);
    }
  }

  handleClick() {
    this.setState((prevstate) => ({
      units: prevstate.units === 'si' ? 'us' : 'si',
    }));
  }

  render() {
    const { weather, units, address } = this.state;
    return (
      <AppContainer className="App">
        {weather ? (
          <>
            <Header handleClick={this.handleClick} address={address} units={units} />
            <Currently
              weather={weather.currently}
              units={units}
            />
            <Periodicals
              weather={weather.hourly}
              units={units}
            />
            <Dailies
              weather={weather.daily}
              units={units}
            />
          </>
        ) : (
          <LoadingIndicator />
        )}
      </AppContainer>
    );
  }
}

App.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  fetchLocation: PropTypes.func.isRequired,
};

export default withGeolocation(withWeather(App));
