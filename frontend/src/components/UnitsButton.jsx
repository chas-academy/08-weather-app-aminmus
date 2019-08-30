import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  
  display: block;
    margin: .5rem .5rem .5rem auto;
    padding: 0.5rem;
    /* background-color: #b4ffff80; */

  :hover,
  :focus {
    background: pink;
}

:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

:active {
    transform: scale(0.99);
}
`;

const UnitsButton = ({ handleClick, units }) => {
  let textContent;
  if (units === 'si') textContent = 'Switch to °F, mph';
  else if (units === 'us') textContent = 'Switch to °C, m/s';


  return (
    <Button onClick={handleClick} type="button" value={units}>{textContent}</Button>
  );
};

UnitsButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
};

export default UnitsButton;
