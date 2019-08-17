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
// TODO: Replace hardcoded information with data from props
const Currently = ({ location }) => {
  // If location is set in state, render location. Otherwise render loading indicator.
  const showLocation = location
    ? (
      <>
        <Wrapper>
          <Info>
            <FontAwesomeIcon icon={faSun} />
            <StyledUl>
              <li>16:00</li>
              <li>22°C</li>
              <li>humidity: 60%</li>
              <li>wind speed: 11km/h</li>
              <li>sunrise: 07:00</li>
            </StyledUl>
          </Info>
        </Wrapper>


        <ul>
          <li>{location.latitude}</li>
          <li>{location.longitude}</li>
        </ul>
      </>
    ) : (
      <p>Loading...</p>
    );

  return (
    <div>
      {showLocation}
    </div>
  );
};

Currently.propTypes = {
  location: PropTypes.oneOfType([PropTypes.bool, PropTypes.objectOf(PropTypes.number)]),
};

Currently.defaultProps = {
  location: false,
};

export default Currently;
