import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Página de cadastro de videos</h1>

      <Link to="/cadastro/categorias">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
