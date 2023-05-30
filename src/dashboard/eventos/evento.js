import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './evento.css';

const Submenu = ({ items, parentKey = 'dashboard' }) => {
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

const Thumbnail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDefaultImage, setShowDefaultImage] = useState(true);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setShowDefaultImage(false);
  };

  const handleDefaultImageClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedImage(event.dataTransfer.files[0]);
    setShowDefaultImage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('titulo', formRef.current.titulo.value);
    formData.append('data', formRef.current.data.value);
    formData.append('descricao', formRef.current.descricao.value);

    axios
      .post('http://localhost:3001/uploadevento', formData)
      .then((response) => {
        console.log(response.data);
        formRef.current.reset();
        setSelectedImage(null);
        setShowDefaultImage(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    formRef.current.reset();
    setSelectedImage(null);
    setShowDefaultImage(true);
  };

  return (
    <div>
      <h2>Adicionar Evento</h2>
      <p style={{ paddingTop: '4%', fontWeight: 'bold' }}>Thumbnail</p>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="image-preview" onDragOver={handleDragOver} onDrop={handleDrop}>
          {selectedImage && !showDefaultImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="thumbnail" />
          )}
          {showDefaultImage && (
            <img
              src="https://www.decomat.pt/index/images/joomlart/demo/default.jpg"
              alt="Default Preview"
              className="thumbnail"
              onClick={handleDefaultImageClick}
            />
          )}
        </div>
        {!selectedImage && (
          <label htmlFor="imagem" className="image-label">
            Arraste a imagem aqui ou clique para selecionar
          </label>
        )}
        <input
          type="file"
          name="imagem"
          id="imagem"
          onChange={handleImageChange}
          ref={fileInputRef} // Atribui a referência ao input de arquivo
          style={{ display: 'none' }} // Esconde o input de arquivo
        />

        <br />
        <br />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '70vh' }}>
              <p className="title_input">Título</p>
              <input
                style={{ backgroundColor: 'rgb(201 200 200)', border: 'none' }}
                type="text"
                name="titulo"
                id="titulo"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="title_input">Data</p>
              <input
                style={{ backgroundColor: 'rgb(201 200 200)', border: 'none' }}
                type="text"
                name="data"
                id="data"
                value={currentDate.toLocaleDateString()}
                readOnly
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="title_input">Descrição</p>
          <textarea
            style={{
              backgroundColor: 'rgb(201 200 200)',
              border: 'none',
              resize: 'none',
              minHeight: '5rem',
              marginRight: '4%',
            }}
            name="descricao"
            id="descricao"
          ></textarea>
        </div>

        {selectedImage && (
          <div>
            <button className="button-submit" type="submit">
              SAVE
            </button>
            <button className="button-cancel" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const MenuEsquerda = ({ handleMenuClick }) => {
  const [submenus, setSubmenus] = useState([
    {
      key: 'noticias',
      label: 'Notícias',
      active: false,
      items: [
        { key: 'adnoticias', label: 'Adicionar Notícias', onClick: () => handleMenuClick('adicionarNoticias', '#4a81dd') },
        { key: 'listanoticia', label: 'Ver Lista de Notícias', onClick: () => handleMenuClick('listaNoticias', '#4a81dd') },
      ],
    },
    {
      key: 'videos',
      label: 'Vídeos',
      active: false,
      items: [
        { key: 'adicionarVideos', label: 'Adicionar Vídeos', onClick: () => handleMenuClick('adicionarVideos', '#ff0000') },
        { key: 'listaVideos', label: 'Ver Lista de Vídeos', onClick: () => handleMenuClick('listaVideos', '#ff0000') },
      ],
    },
    {
      key: 'eventos',
      label: 'Eventos',
      active: false,
      items: [
        { key: 'evento', label: 'Adicionar Eventos', onClick: () => handleMenuClick('adicionarEventos', '#00ff00') },
        { key: 'listaevento', label: 'Ver Lista de Eventos', onClick: () => handleMenuClick('listaEventos', '#00ff00') },
      ],
    },
    {
      key: 'paginas',
      label: 'Páginas',
      active: false,
      items: [
        { key: 'listapagina', label: 'Ver Lista de Páginas', onClick: () => handleMenuClick('listaPaginas', '#ffff00') },
      ],
    },
    {
      key: 'marcadores',
      label: 'Marcadores',
      active: false,
      items: [
        { key: 'marcador', label: 'Marcadores', onClick: () => handleMenuClick('adicionarPaginas', '#ffff00') }
      ],
    },
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
      <div className="title">
        <Link to={`/dashboard`} style={{ textDecoration: 'none' }}>
          <p className="p-principal">Página Inicial</p>
        </Link>
      </div>

      {submenus.map((submenu, index) => (
        <div key={submenu.key}>
          <div className={`menu-item ${submenu.active ? 'ativo' : ''}`} onClick={() => handleSubMenuToggle(index)}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <p className="p-principal">{submenu.label}</p>
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

const Evento = () => {
  const [paginaSelecionada, setPaginaSelecionada] = useState('principal');
  const [corDeFundo, setCorDeFundo] = useState('#3d6cbc');

  const handleMenuClick = (pagina, cor) => {
    setPaginaSelecionada(pagina);
    setCorDeFundo(cor);
  };

  return (
    <div className="dashboard">
      <div className="dashboard_esquerda">
        <MenuEsquerda handleMenuClick={handleMenuClick} />
      </div>
      <div className="adnoticias_direita">
        <Thumbnail />
      </div>
    </div>
  );
};

export default Evento;
