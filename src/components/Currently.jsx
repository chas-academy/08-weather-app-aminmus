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
  flex-direction: column;
`;

const StyledUl = styled.ul`
  list-style-type: none;
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
      <Info>
        <WeatherIcon darkskyIcon={icon} />
        <StyledUl>
          <li>{time}</li>
          <li>{summary}</li>
          {/* TODO: Check units from state and add correct units */}
          <li>{temperature}</li>
          <li>{humidity}</li>
          <li>{windSpeed}</li>
        </StyledUl>
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
