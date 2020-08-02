import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import InputText from '../../../Components/InputText';
import { ButtonCad, Title, Select } from './styles';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categories';
import videoRepository from '../../../repositories/videos';

function CadastroVideo() {
  const [selectValue, setSelectValue] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const initialValues = {
    title: '',
    url: '',
  };
  const history = useHistory();
  const { handleChangeFields, values, clearForm } = useForm(initialValues);

  useEffect(() => {
    categoryRepository.getAll()
      .then((categoryFromServer) => {
        setCategorias(categoryFromServer);
      });
  }, []);

  function handleSelectCategoria(e) {
    const categ = e.target.value;
    setSelectValue(categ);
  }

  function handlerOnSubmit(e) {
    e.preventDefault();

    const cat = parseInt(selectValue, 10);

    videoRepository.create({
      title: values.title,
      url: values.url,
      categoriaId: cat,
    }).then(() => {
      console.log('Cadastrou com sucesso');
    });
    clearForm();
    history.push('/');
    clearForm();
    history.push('/');
  }

  return (
    <PageDefault>

      <Link to="/cadastro/categorias">
        Cadastrar Categoria
      </Link>

      <Title>
        Cadastro de Video:
      </Title>

      <form onSubmit={handlerOnSubmit}>

        <InputText
          type="text"
          name="title"
          value={values.title}
          onChange={handleChangeFields}
          label="Nome da Categoria"
        />

        <InputText
          type="text"
          name="url"
          value={values.url}
          onChange={handleChangeFields}
          label="URL"
        />
        <Select
          name="categoriaId"
          onChange={handleSelectCategoria}
        >
          <option value="0"> Selecione uma Categoria</option>
          {categorias.map((categoria) => (
            <option
              key={categoria.id}
              value={categoria.id}
            >
              {categoria.title}
            </option>
          ))}
        </Select>
        <ButtonCad>
          Cadastrar
        </ButtonCad>
      </form>

    </PageDefault>
  );
}

export default CadastroVideo;
