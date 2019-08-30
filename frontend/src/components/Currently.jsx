import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon';
import { formatTime } from '../utils/date';

const Wrapper = styled.div`
  /* background-color: lightblue; */
  padding: 0rem;
  > * {
    padding: 0.5rem;
    margin: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  > * {
    margin: 1rem .5rem;
  }
`;

// Component for current weather
const Currently = ({ weather, units }) => {
  const {
    time: timestamp, summary, temperature, humidity, windSpeed, icon,
  } = weather;

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  // Convert from unix timestamp to hours and minutes
  const time = formatTime(timestamp, timeOptions);

  const temp = `${Math.round(temperature)}°`;

  const humidityPercentage = humidity.toLocaleString(undefined, { style: 'percent' });
  const wind = `Wind speed ${windSpeed} ${units === 'si' ? 'm/s' : 'mph'}`;

  return (
    <Wrapper>
      <h2>Currently</h2>
      <Info>
        <WeatherIcon darkskyIcon={icon} />
        <p>{time}</p>
        <p>{summary}</p>
        <p>{temp}</p>
        <p>{humidityPercentage}</p>
        <p>{wind}</p>
      </Info>
    </Wrapper>
  );
};

Currently.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  units: PropTypes.string.isRequired,
};

Currently.defaultProps = {
  weather: false,
};

export default Currently;
