import React, { useState, useEffect } from 'react';
import PageDefault from '../../../Components/PageDefault';
import InputText from '../../../Components/InputText';
import TxtArea from '../../../Components/TtxArea';
import { ButtonCad, Title } from './styles';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    const URL = 'http://localhost:8080/categoria';
    fetch(URL).then(async (data) => {
      const resp = await data.json();
      console.log(resp);
      setCategories([
        ...resp,
      ]);
    });
  }, []);

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
      values,
    ]);
    setValues(initialValues);
  }

  return (
    <PageDefault>
      <Title>
        Cadastro de Categoria:
        {values.name}
      </Title>

      <form onSubmit={handlerOnSubmit}>

        <InputText
          type="text"
          name="name"
          value={values.name}
          onChange={handleChangeFields}
          label="Nome da Categoria"
        />

        <TxtArea
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChangeFields}
          label="Descrição"
        />

        <InputText
          type="color"
          name="color"
          value={values.color}
          onChange={handleChangeFields}
          label="cor"
        />

        <ButtonCad>
          Cadastrar
        </ButtonCad>
      </form>

      {categories.length === 0 && (
      <div>
        Loading....
      </div>
      )}

      <ul>
        {categories.map((category) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${category.name}`}>
            {category.name}
          </li>

        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
