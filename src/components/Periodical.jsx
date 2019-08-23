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
`;

const Periodical = ({ weather }) => {
  const {
    time, summary, temperature, icon,
    //  icon,
  } = weather;

  const dateOptions = {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  };

  // Convert from unix timestamp to weekday, hour and minute
  const date = formatDate(time, dateOptions);

  return (
    <Item>
      {/* Unix Timestamp */}
      <p>{date}</p>
      <p>{summary}</p>
      <WeatherIcon darkskyIcon={icon} />
      {/* TODO: Check units from state and add correct units */}
      <p>{temperature}</p>
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
