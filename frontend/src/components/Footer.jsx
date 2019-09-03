import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import darkskyIcon from '../assets/poweredby-oneline-darkbackground.png';

const ImgWrapper = styled.div`
  max-width: 6rem;
  
   img {
    width: 100%;
    height: auto;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.footer`
  max-height: 5rem;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;

  > * {
    margin: 0 .5rem;
  }
`;

const StyledP = styled.p`
  a {
    color: #D2BF55;

    :visited {
      color: #b2ac87
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <StyledP>Created by <a href="https://github.com/aminmus">Aminmus</a></StyledP>

    <IconWrapper>
      <a href="https://github.com/chas-academy/08-weather-app-aminmus"><FontAwesomeIcon icon={faGithub} /></a>
    </IconWrapper>

    <ImgWrapper>
      <a href="https://darksky.net/poweredby/"><img src={darkskyIcon} alt="Powered by Dark Sky" /></a>
    </ImgWrapper>
  </Wrapper>
);

export default Footer;
