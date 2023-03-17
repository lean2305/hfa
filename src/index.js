import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Historia from './historia/historia';
//import Noticias from './noticias/noticias';
//import MenuInicial from './menu-inicial/menu';
import PaginaNoticia from './pagina_noticia/pagina_noticia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginaNoticia />
   
  </React.StrictMode>
);
