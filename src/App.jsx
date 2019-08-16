import React, { Component } from 'react';
import Currently from './components/Currently';
import withWeather from './hoc/withWeather';
import withGeolocation from './hoc/withGeolocation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempUnits: 'si',
    };
    this.fetchLocation = this.fetchLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }


  componentDidMount() {
    // Get the location and set it in State
    this.fetchLocation()
      .then((res) => {
        this.setState({ location: res });
      });
  }

  componentDidUpdate() {
    // TODO: Change below to allow setting a new weather on location switch
    // This prevents making unnecessary API calls
    const { location, weather } = this.state;
    if (location && !weather) {
      this.getWeather(location)
        .then((res) => {
          this.setState({ weather: res });
        });
      console.log('location set');
    } else {
      console.log('location already set, no new weather will be set');
    }
  }

  async getWeather(location) {
    const { fetchWeather } = this.props;
    const { tempUnits } = this.state; // Set default temperature unit to si (celsius)

    const weather = await fetchWeather(location, tempUnits);
    console.log(weather);
    return weather;
  }

  async fetchLocation() {
    const { getLocation } = this.props;

    const location = await getLocation();
    return location;
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

export default withGeolocation(withWeather(App));
