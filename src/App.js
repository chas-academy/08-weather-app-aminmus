import React, { Component } from 'react';
import Currently from './components/Currently';
import withWeather from './hoc/withWeather.js';
import withGeolocation from './hoc/withGeolocation.js';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempUnits: "si"
    };
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
    const { tempUnits } = this.state; // Set default temperature unit to si (celsius)

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
    // TODO: Change below to allow setting a new weather on location switch 
    // This prevents making unnecessary API calls
    if (this.state.location && !this.state.weather) {
      this.getWeather(this.state.location)
        .then(res => {
          this.setState({ weather: res })
        });
      console.log("location set");
    } else {
      console.log("location already set, no new weather will be set");
    }
  }

  render() {
    return (
      <div className="App">
        <Currently
          location={this.state.location}
          weather={this.state.weather}
          tempUnits={this.state.tempUnits}
        />
      </div>
    );
  }
}

export default withGeolocation(withWeather(App));
