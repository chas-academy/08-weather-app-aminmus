import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UnitsButton from './UnitsButton';

const Wrapper = styled.header`
  padding: 1rem;
`;

const Address = styled.h2`
  text-align: center;
  padding: 1rem;
`;

const Header = ({ handleClick, units, address }) => (
  <Wrapper>
    <UnitsButton handleClick={handleClick} units={units} />
    <Address>{address}</Address>
  </Wrapper>
);

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
  address: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Header.defaultProps = {
  address: false,
};

export default Header;
