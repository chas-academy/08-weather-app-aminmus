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
const Currently = ({ weather }) => {
  const {
    time, summary, temperature, humidity, windSpeed,
  } = weather;

  return (
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
};

Currently.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Currently.defaultProps = {
  weather: false,
};

export default Currently;
