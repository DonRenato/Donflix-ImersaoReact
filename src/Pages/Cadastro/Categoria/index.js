import React from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import InputText from '../../../Components/InputText';
import TxtArea from '../../../Components/TtxArea';
import { ButtonCad, Title } from './styles';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categories';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };
  const history = useHistory();
  const { handleChangeFields, values, clearForm } = useForm(initialValues);

  function handlerOnSubmit(e) {
    e.preventDefault();
    categoryRepository.create({
      title: values.title,
      description: values.description,
      color: values.color,
    }).then(() => {
      console.log('Cadastrou com sucesso');
    });
    clearForm();
    history.push('/cadastro/videos');
  }

  return (
    <PageDefault>
      <Title>
        Cadastro de Categoria:
      </Title>

      <form onSubmit={handlerOnSubmit}>

        <InputText
          type="text"
          name="title"
          value={values.title}
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

    </PageDefault>
  );
}

export default CadastroCategoria;
