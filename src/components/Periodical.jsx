import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon';

const Item = styled.div`
  display: flex;
`;

const Periodical = ({ weather }) => {
  const {
    time, summary, temperature, icon,
    //  icon,
  } = weather;

  return (
    <Item>
      {/* Unix Timestamp */}
      <p>{time}</p>
      <p>{summary}</p>
      <WeatherIcon darkskyIcon={icon} />
      {/* TODO: Check units from state and add correct units */}
      <p>{temperature}</p>
    </Item>
  );
};

Periodical.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Periodical.defaultProps = {
  weather: false,
};

export default Periodical;
