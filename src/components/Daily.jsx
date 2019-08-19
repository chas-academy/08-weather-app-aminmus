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

// Component for daily weather forecast
// TODO: Replace hardcoded information with data from props
const Daily = ({ weather }) => {
  let showWeather;
  const { daily } = weather;

  if (weather) {
    showWeather = (
      <Container>
        <h2>Coming days</h2>
        {
          daily.data.map(({
            time, summary, sunriseTime, sunsetTime, temperatureHigh, temperatureLow,
          }) => (
            <>
              <Day>
                {/* Unix Timestamp, weekday and date */}
                <p>{time}</p>
                {/* TODO: Create and integrate a dynamic icon picker, below icon is placeholder */}
                <FontAwesomeIcon icon={faSun} />
                <p>{summary}</p>
                <p>{sunriseTime}</p>
                <p>{temperatureHigh}</p>
              </Day>

              <Night>
                <p>Night</p>
                <FontAwesomeIcon icon={faSun} />
                <p>{sunsetTime}</p>
                <p>{temperatureLow}</p>
              </Night>
            </>
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

Daily.propTypes = {
  weather: PropTypes.objectOf(PropTypes.object),
};

Daily.defaultProps = {
  weather: false,
};

export default Daily;
