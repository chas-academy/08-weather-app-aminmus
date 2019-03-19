import React from 'react';

// Component for current weather
const Currently = props => {

    // If location is set in state, render location. Otherwise render loading indicator.
    let showLocation = props.location ?
      (<ul>
        <li>{props.location.latitude}</li>
        <li>{props.location.longitude}</li>
      </ul>) : (
        <p>Loading...</p>
      );

    return (
      <div>
        {showLocation}
      </div>
    );
}

export default Currently;
