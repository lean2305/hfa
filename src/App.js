

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MenuInicial from './menu-inicial/menu';
import Noticias from './noticias/noticias';
import RecursosHumanos from './recursos-humanos/recursos-humanos';
import Historia from './historia/historia';
import Menu from './menu/menu';
import PaginaNoticia from './pagina_noticia/pagina_noticia';
import Login from './dashboard/login';
import Dashboard from './dashboard/dashboard';
import Protected from './dashboard/protected';
import Videos from './videos/video';
import AdNoticia from './dashboard/noticias/ad-noticias';
import Teste from './dashboard/teste/teste';


function App() {
  return (
    <Router>
      <Routes>
        
          <Route path='/' element={<MenuInicial  />} />
          <Route path='/pagina_noticia' element={<PaginaNoticia />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/recursos-humanos' element={<RecursosHumanos/>} />
          <Route path='/noticias' element={<Noticias />}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Protected><Dashboard  /></Protected>} />
          <Route path='/dashboard/adnoticias' element={<Protected><AdNoticia  /></Protected>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/teste' element={<Teste/>} />
          
      </Routes>
    </Router>
  );
}

export default App;

