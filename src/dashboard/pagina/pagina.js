import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './pagina';
import axios from 'axios';
import APIHOST from '../../constant';
import { format } from 'date-fns';
import { Container, Row, Col } from 'react-grid-system';

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
      { key: 'listaevento', label: 'Ver Lista de Eventos', onClick: () => handleMenuClick('listaEventos', '#00ff00') }
    ] },
    { key: 'paginas', label: 'Páginas', active: false, items: [
      { key: 'listapagina', label: 'Ver Lista de Páginas', onClick: () => handleMenuClick('listaPaginas', '#ffff00') }
    ] },
    { key: 'paginas', label: 'Marcadores', active: false, items: [
      { key: 'marcador', label: 'Marcadores', onClick: () => handleMenuClick('adicionarPaginas', '#ffff00') }
      
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

  const Lista = () => {
    const limitarCaracteres = (texto, limite) => {
      if (texto.length <= limite) {
        return texto;
      }
      return texto.slice(0, limite) + "...";
    };
  
    const [noticias, setNoticias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${APIHOST}/dadospagina`);
          setNoticias(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    const formatarData = (data) => {
      return format(new Date(data), "yyyy-MM-dd");
    };
  
    const indiceInicio = (currentPage - 1) * 7;
    const noticiasExibidas = noticias.slice(indiceInicio, indiceInicio + 8);
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      const totalPages = Math.ceil(noticias.length / 8);
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    return (
      <div className="lista_div" style={{ maxHeight: "80vh" }}>
        <div className="lista_conteudo">
          <div className="coluna coluna-largura">
            <p>Título</p>
          </div>
          <div className="coluna0">
            
          </div>
          <div className="coluna">
            
          </div>
        </div>
        {noticiasExibidas.map((noticia) => (
          <div className="lista_conteudo" key={noticia.id}>
            <div className="coluna_conteudo_titulo">
              <p>{limitarCaracteres(noticia.nome_pag, 35)}</p>
            </div>
            <div className="coluna_conteudo0">
              <p></p>
            </div>
            <div className="coluna_conteudo_svg">
              <p>
                <Link to={`/dashboard/edithistoria`} style={{ textDecoration: "none" }}>
                  <svg
                    style={{ float: "left", marginLeft: "34vh" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </Link>
              
              </p>
            </div>
          </div>
        ))}
        <div>
          <div className="pagination">
            <div className="arrow left-arrow" onClick={handlePreviousPage}>
              ◀
            </div>
            <div className="page">{currentPage}</div>
            <div className="arrow right-arrow" onClick={handleNextPage}>
              ▶
            </div>
          </div>
        </div>
      </div>
    );
  };
  


const Listapagina = () => {
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
        
        
      </div>
    </div>
  );
};

export default Listapagina;
