import React from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
        <PageDefault>
            <h1>Página de cadastro de videos</h1>

            <Link to="/cadastro/categorias">
        Cadastrar Categoria
      </Link>
        </PageDefault>
    );
}

export default CadastroVideo;