import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Item = styled.div`
  display: flex;
`;

const Periodical = ({ weather }) => {
  const {
    time, summary, temperature,
    //  icon,
  } = weather;

  return (
    <Item>
      {/* Unix Timestamp */}
      <p>{time}</p>
      <p>{summary}</p>
      {/* TODO: Create and integrate a dynamic icon picker, below icon is placeholder */}
      <FontAwesomeIcon icon={faSun} />
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
