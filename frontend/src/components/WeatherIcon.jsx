import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconsLookup } from '../utils/icons';

const Wrapper = styled.div`
  svg {
    color: #D2BF55;
  }
`;


const WeatherIcon = ({ darkskyIcon }) => (
  <Wrapper>
    <FontAwesomeIcon icon={iconsLookup[darkskyIcon]} />
  </Wrapper>
);

WeatherIcon.propTypes = {
  darkskyIcon: PropTypes.string.isRequired,
};

WeatherIcon.defaultPros = {
  darkskyIcon: PropTypes.string,
};

export default WeatherIcon;
