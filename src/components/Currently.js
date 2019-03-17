import React, { Component } from 'react';
import withWeather from '../hoc/withWeather.js';
import withGeolocation from '../hoc/withGeolocation.js';

// Component for current weather
class Currently extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchLocation = this.fetchLocation.bind(this);
  }

  async fetchLocation() {
    const { getLocation } = this.props;

    const location = await getLocation();
    return location;
  }

  componentDidMount() {
    // Get the location and set it in State
    this.fetchLocation()
      .then(res => {
        this.setState({ location: res });
      });
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
