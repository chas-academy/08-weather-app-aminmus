import React, { Component } from 'react';
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

const Header = (handleClick, units, location) => {
  return (
    <>
      <BtnWrapper>
        <UnitsButton handleClick={handleClick} units={units} />
      </BtnWrapper>
      <Adress>
        <h2>{location}</h2>
      </Adress>
    </>
  );
};

export default Header;
