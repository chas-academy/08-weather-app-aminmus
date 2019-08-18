import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


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
const Currently = ({ location, weather }) => {
  let showWeather;

  if (weather && location) {
    const {
      time, summary, temperature, humidity, windSpeed,
    } = weather.currently;

    showWeather = (
      <Wrapper>
        <Info>
          {/* TODO: Create and integrate a dynamic icon picker, below icon is placeholder */}
          <FontAwesomeIcon icon={faSun} />
          <StyledUl>
            {/* Unix Timestamp */}
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
  } else {
    showWeather = (
      <p>Loading weather...</p>
    );
  }

  return (
    showWeather
  );
};

Currently.propTypes = {
  location: PropTypes.oneOfType([PropTypes.bool, PropTypes.objectOf(PropTypes.number)]),
  weather: PropTypes.objectOf(PropTypes.object),
};

Currently.defaultProps = {
  location: false,
  weather: false,
};

export default Currently;
