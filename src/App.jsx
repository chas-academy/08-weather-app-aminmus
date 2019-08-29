import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withWeather from './hoc/withWeather';
import withGeolocation from './hoc/withGeolocation';
import Currently from './components/Currently';
import Periodicals from './components/Periodicals';
import Dailies from './components/Dailies';
import LoadingIndicator from './components/LoadingIndicator';
import UnitsButton from './components/UnitsButton';

const AppContainer = styled.div`
  color: #191D32;
  background-color: purple;
  width: 100%;
  height: 100%;
`;

const BtnWrapper = styled.div`
  padding: 1rem;
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
    const { fetchWeather } = this.props;
    const { units } = this.state;
    try {
      const weather = await fetchWeather(location, units);
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

      console.log('Location', location);
      return location;
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
    const { weather, units } = this.state;
    return (
      <AppContainer className="App">
        <BtnWrapper>
          <UnitsButton handleClick={this.handleClick} units={units} />
        </BtnWrapper>
        {weather ? (
          <>
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
