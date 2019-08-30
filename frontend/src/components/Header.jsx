import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UnitsButton from './UnitsButton';

const BtnWrapper = styled.div`
  padding: 1rem;
`;

const Adress = styled.div`
  text-align: center;

  > * {
    padding: 0.5rem;
    margin: 0;
  }
`;

const Header = ({ handleClick, units, address }) => (
  <>
    <BtnWrapper>
      <UnitsButton handleClick={handleClick} units={units} />
    </BtnWrapper>
    <Adress>
      <h2>{address}</h2>
    </Adress>
  </>
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
