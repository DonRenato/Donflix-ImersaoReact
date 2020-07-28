import React from 'react';
import logo from '../../assets/img/logo.png';
import {LogoImage, MenuWrapper} from './styles.js'
import Button from '../Button';
import {Link} from 'react-router-dom';




function Menu(){
    return(
        <MenuWrapper className="Menu" >
            <Link to="/">
                <LogoImage src={logo} alt="DonFLIX logo" /> 
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/videos">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;