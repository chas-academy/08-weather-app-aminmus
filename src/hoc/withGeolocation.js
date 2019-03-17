import React from 'react';

const withGeolocation = WrappedComponent => {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
    });
  };

  return props => (
    // Wrapped component with location inside state(?)
    <WrappedComponent getLocation={getLocation} {...props} />
  )
}

export default withGeolocation;