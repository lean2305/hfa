import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './listaevento.css';

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
      { key: 'listaEventos', label: 'Ver Lista de Eventos', onClick: () => handleMenuClick('listaEventos', '#00ff00') }
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





class Search_filter extends Component {
    render() {
      return (
        <div style={{display :"flex"}}>
            <div className="search-input">
                <input type="text" placeholder="Pesquisar" className="search-input__input"/>
                <FaSearch className="search-input__icon" />
            </div>
            <div className="filter-input">
            <select className="filter-input__select" defaultValue="">
                    <option value="" disabled hidden>
                    Filtrar
                    </option>
                    <option value="filtro1">Filtro 1</option>
                    <option value="filtro2">Filtro 2</option>
                    <option value="filtro3">Filtro 3</option>
                </select>
            </div>
        </div>
      );
    }
  }


  
class Lista extends Component {
    limitarCaracteres(texto, limite) {
        if (texto.length <= limite) {
          return texto;
        }
        return texto.slice(0, limite) + "...";
      }
    render() {
        const textoCompleto = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
        const limiteCaracteres = 35;
        const textoLimitado = this.limitarCaracteres(textoCompleto, limiteCaracteres);
      return (
        <div className='lista_div'>
            <div className='lista_conteudo'>
                <div className="coluna">
                    <p>Título</p>
                </div>
                <div className="coluna">
                    <p>Data</p>
                </div>
                <div className="coluna">
                <Link to={`/dashboard/adnoticias`} style={{ textDecoration: 'none' }}>
                    <div style={{backgroundColor :"#4a81dd" , color:"white" , borderRadius:"5px",marginLeft:"12vh", marginRight:"12vh"}}>
                        <p>Adicionar Evento</p>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='lista_conteudo'>
                <div className="coluna_conteudo_titulo">
                    <p>{textoLimitado}</p>
                </div>
                <div className="coluna_conteudo">
                    <p>dd/mm/aa</p>
                </div>
                <div className="coluna_conteudo_svg" >
                    <p> <svg style={{float:"left", marginLeft:"12vh"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
                        <svg style={{float:"right" ,marginRight:"12vh"}} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 100 100">
                        <path d="M20 20 L80 80 M80 20 L20 80" stroke="black" stroke-width="10"/>
                        </svg>
                    </p>
                    
                </div>
                
            </div>

            
        </div>
        
      );
    }
  }

  class Pagincao extends Component {
    render() {  
      return (
        <div >
        
            <div class="pagination">
                <div class="arrow left-arrow">◀</div>
                <div class="page">1</div>
                <div class="arrow right-arrow">▶</div>
            </div>

        </div>
        
      );
    }
  }




const Listaevento = () => {
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
      <div className="listanoticia_direita" >
        <Search_filter />
        <Lista />
        <Pagincao />
        
      </div>
    </div>
  );
};

export default Listaevento;
