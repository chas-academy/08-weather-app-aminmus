import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon';

const Day = styled.div`
  display: flex;
`;

const Night = styled(Day)``;


const Daily = ({ weather }) => {
  const {
    time, summary, sunriseTime, sunsetTime, temperatureHigh, temperatureLow, icon,
  } = weather;
  return (
    <>
      <Day>
        {/* Unix Timestamp, weekday and date */}
        <p>{time}</p>
        {/* TODO: Create and integrate a dynamic icon picker, below icon is placeholder */}
        <WeatherIcon darkskyIcon={icon} />
        <p>{summary}</p>
        <p>{sunriseTime}</p>
        <p>{temperatureHigh}</p>
      </Day>

      <Night>
        <p>Night</p>
        <WeatherIcon darkskyIcon={icon} />
        <p>{sunsetTime}</p>
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
