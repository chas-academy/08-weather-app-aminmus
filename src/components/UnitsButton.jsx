import React from 'react';
import PropTypes from 'prop-types';

const UnitsButton = ({ handleClick, units }) => {
  let textContent;
  if (units === 'si') textContent = 'Switch to °F, mph';
  else if (units === 'us') textContent = 'Switch to °C, m/s';


  return (
    <button onClick={handleClick} type="button" value={units}>{textContent}</button>
  );
};

UnitsButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
};

export default UnitsButton;
