import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideos from './Pages/Cadastro/Videos';
import CadastroCategorias from './Pages/Cadastro/Categoria';
import ERROR404 from './Pages/ERROR404';



ReactDOM.render(
 <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/videos" component={CadastroVideos} />
    <Route path="/cadastro/categorias" component={CadastroCategorias} />
    <Route  component={ERROR404}/>
  </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);

