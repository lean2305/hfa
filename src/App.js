

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MenuInicial from './menu-inicial/menu';
import Noticias from './noticias/noticias';
import RecursosHumanos from './recursos-humanos/recursos-humanos';
import Historia from './historia/historia';
import Menu from './menu/menu';
import PaginaNoticia from './pagina_noticia/pagina_noticia';
import Loginantigo from './dashboard/loginantigo/login';
import Dashboard from './dashboard/dashboard';
import Protected from './dashboard/protected';
import Videos from './videos/video';
import AdNoticia from './dashboard/noticias/ad-noticias';
import Listanoticia from './dashboard/listanoticia/listanoticia';
import Evento from './dashboard/eventos/evento';
import Listaevento from './dashboard/listaeventos/listaevento';
import Login from './dashboard/login/login';
import Listapagina from './dashboard/pagina/pagina';
import Edithistoria from './dashboard/editpagina/edithistoria';
import Marcador from './dashboard/marcador/marcador';
import Editnoticia from './dashboard/editnoticia/editnoticia';
import Editevento from './dashboard/editevento/editevento';
import Advideo from './dashboard/advideo/advideos';
import Listavideo from './dashboard/listavideo/listavideo';


function App() {
  return (
    <Router>
      <Routes>
        
          <Route path='/' element={<MenuInicial  />} />
          <Route path="/pagina_noticia/:idnotev" element={<PaginaNoticia/>} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/recursos-humanos' element={<RecursosHumanos/>} />
          <Route path='/noticias' element={<Noticias />}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Protected><Dashboard  /></Protected>} />
          <Route path='/dashboard/adnoticias' element={<Protected><AdNoticia  /></Protected>} />
          <Route path='/dashboard/listanoticia' element={<Protected><Listanoticia  /></Protected>} />
          <Route path='/dashboard/evento' element={<Protected><Evento  /></Protected>} />
          <Route path='/dashboard/listaevento' element={<Protected><Listaevento  /></Protected>} />
          <Route path='/dashboard/listapagina' element={<Protected><Listapagina  /></Protected>} />
          <Route path='/dashboard/edithistoria' element={<Protected><Edithistoria  /></Protected>} />
          <Route path='/dashboard/marcador' element={<Protected><Marcador  /></Protected>} />
          <Route path='/dashboard/editnoticia/:idnotev' element={<Protected><Editnoticia  /></Protected>} />
          <Route path='/dashboard/editevento/:idnotev' element={<Protected><Editevento  /></Protected>} />
          <Route path='/dashboard/advideo' element={<Protected><Advideo  /></Protected>} />
          <Route path='/dashboard/listavideo' element={<Protected><Listavideo  /></Protected>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/loginantigo' element={<Loginantigo/>} />
          
          
      </Routes>
    </Router>
  );
}

export default App;

