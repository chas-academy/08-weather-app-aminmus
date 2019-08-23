import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon';
import { formatDate, formatTime } from '../utils/date';

const Day = styled.div`
  display: flex;
`;

const Night = styled(Day)``;


const Daily = ({ weather }) => {
  const {
    time, summary, sunriseTime, sunsetTime, temperatureHigh, temperatureLow, icon,
  } = weather;


  const dateOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  // Convert from unix timestamp to weekday, day and month
  const date = formatDate(time, dateOptions);

  // Convert from unix timestamp to hours and minutes
  const sunrise = formatTime(sunriseTime, timeOptions);
  const sunset = formatTime(sunsetTime, timeOptions);

  return (
    <>
      <Day>
        <p>{date}</p>
        <WeatherIcon darkskyIcon={icon} />
        <p>{summary}</p>
        <p>{sunrise}</p>
        <p>{temperatureHigh}</p>
      </Day>

      <Night>
        <p>Night</p>
        <WeatherIcon darkskyIcon={icon} />
        <p>{sunset}</p>
        <p>{temperatureLow}</p>
      </Night>
    </>
  );
};

Daily.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Daily.defaultProps = {
  weather: false,
};

export default Daily;
