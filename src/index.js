import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Historia from './historia/historia';
//import Noticias from './noticias/noticias';
//import MenuInicial from './menu-inicial/menu';
//import RecursosHumanos from './recursos-humanos/recursos-humanos';
import Menu from './menu/menu'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Menu />
   
  </React.StrictMode>
);
