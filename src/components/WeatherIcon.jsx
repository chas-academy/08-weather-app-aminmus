import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconsLookup } from '../utils/icons';


const WeatherIcon = ({ darkskyIcon }) => (
  <FontAwesomeIcon icon={iconsLookup[darkskyIcon]} />
);

WeatherIcon.propTypes = {
  darkskyIcon: PropTypes.string.isRequired,
};

WeatherIcon.defaultPros = {
  darkskyIcon: PropTypes.string,
};

export default WeatherIcon;
