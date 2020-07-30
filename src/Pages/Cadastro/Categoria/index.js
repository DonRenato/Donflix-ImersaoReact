import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import styled from 'styled-components';

const ButtonCad = styled.button`
    width: 100%;
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 16px 24px;
    font-size: 16px;
    border-radius:4px;
    font-weight: bold;
    text-decoration: none;
    transition: opacity .3s;
    background-color: var(--black);
   
    &:hover,
    &:focus {
        opacity: 0.5;
    }
    `;








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
      type='text'
      name='name'
      value={values.name}
      onChange={handleChangeFields}
      placeholder="Nome da Categoria"
    />

    <FormField
      type="textare"
      name='description'
      value={values.description}
      onChange={handleChangeFields}
      placeholder="Descrição"
    />
  
    <FormField
      type="color"
      name='color'
      value={values.color}
      onChange={handleChangeFields}
    />

    <ButtonCad>
      Cadastrar
    </ButtonCad>
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

   

  </PageDefault>
  );
}

export default CadastroCategoria;