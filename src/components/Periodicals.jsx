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
const Periodicals = ({ weather }) => {
  let showWeather;

  if (weather) {
    const { data } = weather.hourly;

    // Get every third element from the first 24 elements, (weather of every third hour)
    const triHourlyData = data.filter((element, index) => index % 3 === 0 && index < 24);

    // Contains the data we want to render
    const today = {
      ...weather.hourly, triHourlyData,
    };

    showWeather = (
      <Container>
        <h2>Tri hourly</h2>
        <h3>{today.summary}</h3>
        {
          today.triHourlyData.map((element) => (
            <Item>
              {/* Unix Timestamp */}
              <p>{element.time}</p>
              <p>{element.summary}</p>
              {/* TODO: Create and integrate a dynamic icon picker, below icon is placeholder */}
              <FontAwesomeIcon icon={faSun} />
              {/* TODO: Check units from state and add correct units */}
              <p>{element.temperature}</p>
            </Item>
          ))
        }
      </Container>
    );
  } else {
    showWeather = (
      <p>loading...</p>
    );
  }

  return (
    showWeather
  );
};

Periodicals.propTypes = {
  weather: PropTypes.objectOf(PropTypes.object),
};

Periodicals.defaultProps = {
  weather: false,
};

export default Periodicals;
