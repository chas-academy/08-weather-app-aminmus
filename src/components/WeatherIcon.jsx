import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconsLookup } from '../utils/icons';


const WeatherIcon = ({ darkskyIcon }) => {
  return (
    <FontAwesomeIcon icon={iconsLookup[darkskyIcon]} />
  );
};

WeatherIcon.propTypes = {
  darkskyIcon: PropTypes.string,
};

export default WeatherIcon;
