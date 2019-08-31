import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: .5rem .5rem .5rem auto;
  padding: 1rem;

  text-decoration: none;
  color: #3C3744;
  background: #D2BF55;

  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, 
              transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  border: none;

  :hover,
  :focus {
    background: #BAA94A;
  }

  :focus {
    outline: 1px solid #D2BF55;
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
