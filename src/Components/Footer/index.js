import React from 'react';
import logo from '../../assets/img/logo.png';
import { FooterBase } from './styles';
import { LogoImage } from '../Menu/styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <LogoImage src={logo} alt="DonFLIX logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
