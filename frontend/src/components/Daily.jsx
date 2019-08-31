import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon';
import { formatDate, formatTime } from '../utils/date';

const Wrapper = styled.div`
    border: 2px solid midnightblue;
    margin: .5rem;

  > * {
    padding: .5rem 0;
    margin: 0 .5rem;
  }
`;

const Day = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin: 1rem .5rem;
  }
`;

const Night = styled(Day)`
  /* Midnightblue, slightly transparent */
  border-top: 2px solid hsl(240, 64%, 27%, 25%);  
`;

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

  const tempHigh = `${Math.round(temperatureHigh)}°`;
  const tempLow = `${Math.round(temperatureLow)}°`;

  return (
    <Wrapper>
      <Day>
        <p>{date}</p>
        <WeatherIcon darkskyIcon={icon} />
        <p>{summary}</p>
        <p>{`Sunrise: ${sunrise}`}</p>
        <p>{`High: ${tempHigh}`}</p>
      </Day>

      <Night>
        <p>Night</p>
        <WeatherIcon darkskyIcon={icon} />
        <p>{`Sunset: ${sunset}`}</p>
        <p>{`Low: ${tempLow}`}</p>
      </Night>
    </Wrapper>
  );
};

Daily.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Daily.defaultProps = {
  weather: false,
};

export default Daily;
