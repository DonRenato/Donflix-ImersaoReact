import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import InputText from '../../../Components/InputText';
import TxtArea from '../../../Components/TtxArea';
import {ButtonCad, Title} from './styles';


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
      <Title>Cadastro de Categoria: {values.name}</Title>

  <form onSubmit={handlerOnSubmit}>
    
    <InputText
      type='text'
      name='name'
      value={values.name}
      onChange={handleChangeFields}
      placeholder="Nome da Categoria"
    />

    <TxtArea
      type='textarea'
      name='description'
      value={values.description}
      onChange={handleChangeFields}
      placeholder="Descrição"
      
      
    />
  
    <InputText
      type='color'
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