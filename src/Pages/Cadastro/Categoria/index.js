import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../Components/FormField';


function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([]);

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }
  
  function handleChangeFields(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }


  function handlerOnSubmit(e) {
    e.preventDefault();
    setCategories([
      ...categories,
      values
    ]
    );
    setValues(initialValues);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

  <form onSubmit={handlerOnSubmit}>
    
    <FormField
      label="Nome da Categoria"
      type='text'
      name='name'
      value={values.name}
      onChange={handleChangeFields}
    />

    <FormField
      label="Descrição"
      type="textare"
      name='description'
      value={values.description}
      onChange={handleChangeFields}
    />
  
    <FormField
      label="Cor"
      type="color"
      name='color'
      value={values.color}
      onChange={handleChangeFields}
    />

    <button>
      Cadastrar
    </button>
  </form>

  <ul>
    {categories.map((category, i) => {
      return (
        <li key={`${category}${i}`}>
          {category.name} - {category.description} - {category.color}
          </li>

          );
    })}
  </ul>

    <Link to="/">
        Ir para home
    </Link>

  </PageDefault>
  );
}

export default CadastroCategoria;