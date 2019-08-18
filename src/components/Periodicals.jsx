import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
`;

// Component for periodical (i.e. every 3 hours) weather forecast
// TODO: Replace hardcoded information with data from props
const Periodicals = () => (
  <Container>
    <Item>
      <p>19:00</p>
      <p>mostly cloudy</p>
      <FontAwesomeIcon icon={faSun} />
      <p>20°C</p>
    </Item>

    <Item>
      <p>22:00</p>
      <p>sparse clouds</p>
      <FontAwesomeIcon icon={faSun} />
      <p>20°C</p>
    </Item>
  </Container>
);


Periodicals.propTypes = {
};

Periodicals.defaultProps = {
};

export default Periodicals;
