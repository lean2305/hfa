import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIHOST from '../../constant';
import './advideo.css';

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



class Tutorial extends Component {
    constructor(props) {
      super(props);
      this.state = {
        titulo: '',
        url: ''
      };
    }
  
    handleCancel = () => {
      this.setState({ titulo: '', url: '' });
    };
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = () => {
      const { titulo, url } = this.state;
  
      // Faz a solicitação POST para o servidor
     
  axios.post(`${APIHOST}/adicionar-video`, { titulo, url })
  .then(response => {
    console.log(response.data);
    // Faça o que for necessário com a resposta do servidor

    // Limpar os campos e redefinir o estado
    this.setState({ titulo: '', url: '' });

    // Recarregar a página
    window.location.reload();
  })
  .catch(error => {
    console.error('Erro:', error);
  });
    };
  
    render() {
      const { titulo, url } = this.state;
  
      return (
        <div>
          <h2>Adicionar Vídeo</h2>
          <div style={{ display: 'flex', paddingTop: '0vh', alignItems: 'center' }}>
            <div className='conteudo_video' style={{ marginRight: '2rem', width: '100%' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
                <video src={process.env.PUBLIC_URL + '../video/Tutorial URL.mp4'} autoPlay loop muted style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} />
              </div>
              <p style={{ fontSize: '2vh', marginTop: '1rem' }}>Como obter o link   ⤴</p>
              <input
                style={{ backgroundColor: 'rgb(201, 200, 200)', border: 'none', borderRadius: '10px', padding: '10px', width: '97%', marginTop: '1rem' }}
                placeholder='Escreva o título da página'
                type="text"
                name="titulo"
                id="titulo"
                value={titulo}
                onChange={this.handleInputChange}
              />
              <br />
              <input
                style={{ backgroundColor: 'rgb(201, 200, 200)', border: 'none', borderRadius: '10px', padding: '10px', width: '97%', marginTop: '1rem' }}
                placeholder='URL do vídeo'
                type="text"
                name="url"
                id="url"
                value={url}
                onChange={this.handleInputChange}
              />
              <div>
              <button className="button-submit" type="submit" onClick={this.handleSubmit}>
                SAVE
              </button>
              <button className="button-cancel" type="button" onClick={this.handleCancel}>
                Cancel
              </button>
            </div>
          </div>
          <div style={{ width: '70vh', height: '40vh', position: 'relative' }}>
              
            </div>
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
      { key: 'advideo', label: 'Adicionar Vídeos', onClick: () => handleMenuClick('adicionarVideos', '#ff0000') },
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
      { key: 'adicionarPaginas', label: 'Tabela de Paginas', onClick: () => handleMenuClick('adicionarPaginas', '#ffff00') }
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




const Advideo = () => {
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
        <Tutorial />
      </div>
    </div>
  );
};

export default Advideo;
