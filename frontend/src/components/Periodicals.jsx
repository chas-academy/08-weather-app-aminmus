import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Periodical from './Periodical';

const Container = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;

  > * {
    padding: 0.5rem;
    margin: 0;
  }
`;

// Container for periodical components (i.e. every 3 hours weather forecast)
const Periodicals = ({ weather }) => {
  const { data } = weather;

  // Get every third element from the first 24 elements, (weather for every third hour)
  const triHourlyData = data.filter((element, index) => index % 3 === 0 && index < 24);

  // Contains the data we want to render
  const today = {
    ...weather, triHourlyData,
  };

  return (
    <Container>
      <h2>Tri hourly</h2>
      <h3>{today.summary}</h3>
      {
        today.triHourlyData.map((element) => (
          // Using the Unix Timestamp of the hour as key
          <Periodical
            key={element.time.toString()}
            weather={element}
          />
        ))
      }
    </Container>
  );
};

Periodicals.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Periodicals.defaultProps = {
  weather: false,
};

export default Periodicals;
