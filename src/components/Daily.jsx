import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background-color: #72e0d1;
  display: flex;
  flex-direction: column;
`;
const Day = styled.div`
  display: flex;
`;

const Night = styled(Day)``;

// Component for periodical (i.e. every 3 hours) weather forecast
// TODO: Replace hardcoded information with data from props
const Daily = () => (
  <Container>
    <Day>
      <p>Friday</p>
      <FontAwesomeIcon icon={faSun} />
      <p>16/8</p>
      <p>slightly cloudy</p>
      <p>sunrise: 05:13</p>
      <p>21°C high</p>
    </Day>

    <Night>
      <p>Night</p>
      <FontAwesomeIcon icon={faSun} />
      <p>mostly clear</p>
      <p>sunset: 20:30</p>
      <p>14°C low</p>
    </Night>
  </Container>
);

Daily.propTypes = {
};

Daily.defaultProps = {
};

export default Daily;
