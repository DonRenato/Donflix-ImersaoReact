import React from 'react';
import logo from '../../assets/img/logo.png';

import './styles.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';


function Menu(){
    return(
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={logo} alt="logotipo"/>
            </a>

            <Button as="a"className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;