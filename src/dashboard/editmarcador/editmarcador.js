import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './editmarcador.css';
import { useParams } from 'react-router-dom';
import APIHOST from '../../constant';

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
const Add = () => {
    const { idmarcador } = useParams();
    const [nomeMarcador, setNomeMarcador] = useState('');
    const [contactoMarcador, setContactoMarcador] = useState('');
  
    useEffect(() => {
      const fetchMarcador = async () => {
        try {
          const response = await axios.get(`${APIHOST}/dadosmarcador/${idmarcador}`);
          console.log(response.data); // Verifique os dados retornados no console
  
          if (response.data.length > 0) {
            const { nome_marcador, contacto_marcador } = response.data[0];
            setNomeMarcador(nome_marcador);
            setContactoMarcador(contacto_marcador);
          } else {
            // Lógica para lidar com o caso em que não há dados do marcador
            console.log('Dados do marcador não encontrados');
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchMarcador();
    }, [idmarcador]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        try {
          // Fazer a requisição para a API para atualizar o marcador
          await axios.put(`${APIHOST}/dadosmarcador/${idmarcador}`, {
            nome_marcador: nomeMarcador,
            contacto_marcador: contactoMarcador
          });
          
          // Lógica adicional, se necessário, após a atualização do marcador
          console.log('Marcador atualizado com sucesso!');
        } catch (error) {
          console.error(error);
        }
      };
      
    return (
      <div className='addMarcador'>
        <h2>Editar Marcador</h2>
        <form onSubmit={handleFormSubmit}>      
          <div>
            <p>Nome</p>
            <input value={nomeMarcador} onChange={(e) => setNomeMarcador(e.target.value)} /><br />
            <p>Contacto</p>
            <input value={contactoMarcador} onChange={(e) => setContactoMarcador(e.target.value)} /><br />
          </div>
          <button className="btn" type="submit">
            Guardar
          </button>
          <button className="btn2" type="button">
            Cancelar
          </button>
        </form>
      </div>
    );
  };


const  Editmarcador = () => {
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
      <div className="dashboard_direita">
        <Add />
      </div>
    </div>
  );
};

export default  Editmarcador;