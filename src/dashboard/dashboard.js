import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import axios from 'axios';
import APIHOST from '../constant';

const Submenu = ({ items, parentKey="dashboard" }) => {
  return (
    <ul className="submenu">
      {items.map((item) => (
        <Link to={`/${parentKey}/${item.key}`} style={{ textDecoration: 'none' }}>
          <li key={item.key} onClick={item.onClick} className="menu-item">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};


class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVisualizacoes: 0,
      totalVisualizacoesnoti: 0,
      totalVisualizacoesevento : 0,
    };
  }

  componentDidMount() {
    // Fazer a requisição à API para obter o total de visualizações
    axios.get(`${APIHOST}/totalviewvideo`)
      .then((response) => {
        this.setState({ totalVisualizacoes: response.data.total_visualizacoes });
      })
      .catch((error) => {
        console.error('Erro ao obter o total de visualizações:', error);
      });

      axios.get(`${APIHOST}/totalviewnoticias`)
      .then((response) => {
        this.setState({ totalVisualizacoesnoti: response.data.totalVisualizacoesnoti });
      })
      .catch((error) => {
        console.error('Erro ao obter o total de visualizações:', error);
      });

      axios.get(`${APIHOST}/totalviewnoticiasevento`)
      .then((response) => {
        this.setState({ totalVisualizacoesevento: response.data.totalVisualizacoesevento });
      })
      .catch((error) => {
        console.error('Erro ao obter o total de visualizações:', error);
      });
  }


  render() {
    const { totalVisualizacoes, totalVisualizacoesnoti ,totalVisualizacoesevento } = this.state;

    return (
      <div className="contador-direita">
        <div className="contador-item">
          <p>
            Vídeos{' '}
            <svg
              className="contador-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path d="M21 12l-18 12v-24z" />
            </svg>
          </p>
          <p>{totalVisualizacoes}</p>
        </div>
        <div className="contador-item">
          <p>
            Noticias
            <svg
              className="contador-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path d="M21 3h-2V1h-2v2H7V1H5v2H3v18h18V3zM5 20V5h2v15h10V5h2v15H5z" />
            </svg>
          </p>
          <p>{totalVisualizacoesnoti}</p>
        </div>
        <div className="contador-item">
          <p>
            Eventos
            <svg
              className="contador-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-10.5h2v2h-2v-2zm0 4h2v6h-2v-6z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </p>
          <p>{totalVisualizacoesevento}</p>
        </div>
      </div>
    );
  }
}



class Top_contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topVideos: [],
      topNoticias: [],
      topEventos: []
    };
  }

  componentDidMount() {
    axios.get(`${APIHOST}/topvideos`)
      .then(response => {
        this.setState({ topVideos: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`${APIHOST}/topnoticias`)
      .then(response => {
        this.setState({ topNoticias: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`${APIHOST}/topevento`)
      .then(response => {
        this.setState({ topEventos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  truncateTitle(title) {
    if (title.length > 25) {
      return title.substring(0, 19) + '...';
    }
    return title;
  }

  render() {
    const { topVideos, topNoticias, topEventos } = this.state;

    return (
      <div className="contador-direita">
        <div className="contador-top">
          <h4>Top 5 Vídeos</h4>
          {topVideos.map(video => (
            <div className='contador-view' key={video.id_videos}>
              <p className='contador-p'>{this.truncateTitle(video.titulo_video)}</p>
              <p className='contador-p'>{video.view_video}</p>
            </div>
          ))}
        </div>
        <div className="contador-top">
          <h4>Top 5 Notícias</h4>
          {topNoticias.map(noticia => (
            <div className='contador-view' key={noticia.idnotev}>
              <p className='contador-p'>{this.truncateTitle(noticia.titulo_notev)}</p>
              <p className='contador-p'>{noticia.view_notev}</p>
            </div>
          ))}
        </div>
        <div className="contador-top">
          <h4>Top 5 Eventos</h4>
          {topEventos.map(evento => (
            <div className='contador-view' key={evento.idnotev}>
              <p className='contador-p'>{this.truncateTitle(evento.titulo_notev)}</p>
              <p className='contador-p'>{evento.view_notev}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


const Menu_esquerda = ({ handleMenuClick }) => {
  const [submenus, setSubmenus] = useState([
   
    { key: 'noticias', label: 'Notícias', active: false, items: [
      { key: 'adnoticias', label: 'Adicionar Notícias', onClick: () => handleMenuClick('adicionarNoticias', '#4a81dd') },
      { key: 'listanoticia', label: 'Ver Lista de Notícias', onClick: () => handleMenuClick('listaNoticias', '#4a81dd') }
    ] },
    { key: 'videos', label: 'Vídeos', active: false, items: [
      { key: 'adicionarVideos', label: 'Adicionar Vídeos', onClick: () => handleMenuClick('adicionarVideos', '#ff0000') },
      { key: 'listaVideos', label: 'Ver Lista de Vídeos', onClick: () => handleMenuClick('listaVideos', '#ff0000') }
    ] },
    { key: 'eventos', label: 'Eventos', active: false, items: [
      { key: 'evento', label: 'Adicionar Eventos', onClick: () => handleMenuClick('adicionarEventos', '#00ff00') },
      { key: 'listaevento', label: 'Ver Lista de Eventos', onClick: () => handleMenuClick('listaEventos', '#00ff00') }
    ] },
    { key: 'paginas', label: 'Páginas', active: false, items: [
      { key: 'listapagina', label: 'Ver Lista de Páginas', onClick: () => handleMenuClick('listaPaginas', '#ffff00') }
    ] },
    { key: 'paginas', label: 'Marcadores', active: false, items: [
      { key: 'listamarcador', label: 'Tabela de marcadores', onClick: () => handleMenuClick('adicionarPaginas', '#ffff00') }
    ] }
 

  ]);
  const handleSubMenuToggle = (index) => {
    const updatedSubmenus = submenus.map((submenu, i) => {
      if (i === index) {
        return { ...submenu, active: !submenu.active };
      } else {
        return { ...submenu, active: false };
      }
    });
    setSubmenus(updatedSubmenus);
  };

  return (
    <div className="menu_dashboard_esquerda">
      <div className="title ativo">
            <Link to={`/dashboard`} style={{ textDecoration: 'none' }}>
                <p className="p-principal">Página Inicial</p>
            </Link>
        </div>
      {submenus.map((submenu, index) => (
        <div key={submenu.key}>
          <div className={`menu-item ${submenu.active ? 'ativo' : ''}`} onClick={() => handleSubMenuToggle(index)}>
            
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <p className='p-principal'>{submenu.label}</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: '4px' }}
              >
                <path
                  d={submenu.active ? 'M7 10l5 5 5-5H7z' : 'M7 14l5-5 5 5H7z'}
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          {submenu.active && <Submenu items={submenu.items} />}
        </div>
      ))}
    </div>
  );
};




const Dashboard = () => {
  const [paginaSelecionada, setPaginaSelecionada] = useState('principal');
  const [corDeFundo, setCorDeFundo] = useState('#3d6cbc');

  const handleMenuClick = (pagina, cor) => {
    setPaginaSelecionada(pagina);
    setCorDeFundo(cor);
  };

  return (
    <div className="dashboard">
      <div className="dashboard_esquerda">
        <Menu_esquerda handleMenuClick={handleMenuClick} />
      </div>
      <div className="dashboard_direita" >
        <Contador />
        <Top_contador />
      </div>
    </div>
  );
};

export default Dashboard;
