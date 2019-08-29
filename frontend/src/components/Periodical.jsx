import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon';
import { formatDate } from '../utils/date';

const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  
  > * {
    margin: 1rem .5rem;
  }
`;

const Periodical = ({ weather }) => {
  const {
    time, summary, temperature, icon,
  } = weather;

  const dateOptions = {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  };

  // Convert from unix timestamp to weekday, hour and minute
  const date = formatDate(time, dateOptions);

  const temp = `${Math.round(temperature)}°`;

  return (
    <Item>
      <p>{date}</p>
      <p>{summary}</p>
      <WeatherIcon darkskyIcon={icon} />
      <p>{temp}</p>
    </Item>
  );
};

Periodical.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Periodical.defaultProps = {
  weather: false,
};

export default Periodical;
