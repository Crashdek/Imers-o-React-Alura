import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import './footer.css'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/erick-bragante/" target="_blank"  rel="noopener noreferrer">
        <img className="Logo" src={Logo} alt="Logo ErickFlix" />
      </a>
      <p>
        Orgulhosamente criado por
         {' '}
        <a href="https://www.linkedin.com/in/erick-bragante/" target="_blank"  rel="noopener noreferrer">
           @ErickBragante
        </a><br></br>
         durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
