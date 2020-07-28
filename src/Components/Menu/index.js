import React from 'react';
import logo from '../../assets/img/logo.png';
import {LogoImage, MenuWrapper} from './styles.js'
import Button from '../Button';




function Menu(){
    return(
        <MenuWrapper className="Menu" >
            <a href="/">
                <LogoImage src={logo} alt="DonFLIX logo" /> 
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;