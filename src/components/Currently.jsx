import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon';
import { formatTime } from '../utils/date';

const Wrapper = styled.div`
  background-color: lightblue;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

// Component for current weather
const Currently = ({ weather }) => {
  const {
    time: timestamp, summary, temperature, humidity, windSpeed, icon,
  } = weather;

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  // Convert from unix timestamp to hours and minutes
  const time = formatTime(timestamp, timeOptions);

  return (
    <Wrapper>
      <h2>Currently</h2>
      <Info>
        <WeatherIcon darkskyIcon={icon} />
        <p>{time}</p>
        <p>{summary}</p>
        {/* TODO: Check units from state and add correct units */}
        <p>{temperature}</p>
        <p>{humidity}</p>
        <p>{windSpeed}</p>
      </Info>
    </Wrapper>
  );
};

Currently.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Currently.defaultProps = {
  weather: false,
};

export default Currently;
