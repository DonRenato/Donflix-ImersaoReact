import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../Components/PageDefault';
import erro from '../../assets/img/erro.png';
import { Image404 } from './styles';

function ERROR404() {
  return (
    <PageDefault>
      <Link to="/">
        <Image404 src={erro} alt="error" />
      </Link>

    </PageDefault>
  );
}

export default ERROR404;
