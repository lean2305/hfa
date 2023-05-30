import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './edithistoria.css';

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


const Thumbnail = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showDefaultImage, setShowDefaultImage] = useState(true);
    const fileInputRef = useRef(null); // Referência ao input do arquivo
    const formRef = useRef(null); // Referência ao formulário
  
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
      // Ao clicar na imagem padrão, aciona o clique no input de arquivo
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
  
      axios
        .post('http://localhost:3001/upload', formData)
        .then((response) => {
          console.log(response.data);
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
        <h2>Editar Página</h2>
        <p style={{ paddingTop: '4%', fontWeight: 'bold' }}>Alterar Thumbnail</p>
        <form onSubmit={handleSubmit} ref={formRef}>

            {/*INPUT IMAGEM PRINCIPAL */}
          <div
            className="image-preview"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedImage && !showDefaultImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                className="thumbnail"
              />
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
              Clique ou arraste para alterar o banner da página
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
            {/*FIM INPUT IMAGEM PRINCIPAL */}

            {/*INPUT TITULO */}
          <br/><br/>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
                <p className="title_input">Título da Página</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  placeholder='Escreva o título da página'
                  type="text"
                  name="titulo"
                  id="titulo"
                />
              </div>
            </div>
          </div>
            {/*FIM DO INPUT TITULO */}
            
            {/* INPUT IMAGEM E TEXTO  */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className="title_input">História da HFA (1º Parágrafo)</p>
            <textarea
              style={{
                backgroundColor: 'rgb(201 200 200)',
                border: 'none',
                minHeight: '4rem',
                marginRight: '4%',
                resize: 'vertical',
                padding: 10,
                borderRadius: 10
              }}
              placeholder='Escreva aqui o primeiro parágrafo sobre a história da HFA'
              name="descricao"
              id="descricao"
            ></textarea>
            <br/>
            <p className="title_input">História da HFA (2º Parágrafo)</p>
            <textarea
              style={{
                backgroundColor: 'rgb(201 200 200)',
                border: 'none',
                minHeight: '4rem',
                marginRight: '4%',
                resize: 'vertical',
                padding: 10,
                borderRadius: 10
              }}
              placeholder='Escreva aqui o segundo parágrafo sobre a história da HFA'
              name="descricao"
              id="descricao"
            ></textarea>
            <br/>
            <p className="title_input">Imagem historia</p>
            <div
            className="image-preview"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedImage && !showDefaultImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                className="thumbnail"
              />
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
                Clique ou arraste para alterar a imagem
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
          </div>
            {/* FIM DO INPUT IMAGEM ESQUERDA DO TEXTO DA HISTORIA */}

            {/* INPUTS DOS 3 OBJETIVOS */}
            <br/><br/>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width:"68.5vw" }}>
                <p className="title_input">1º Objetivo</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  placeholder='Número do Objetivo'
                  name="titulo"
                  id="titulo"
                /><br/>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  placeholder='Título do Objetivo'
                  id='titulo'
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, resize: 'vertical', minHeight: '4rem' }}
                  type="text"
                  name="titulo"
                  placeholder='Descrição do Objetivo'
                  id="titulo"
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width:"68.5vw" }}>
                <p className="title_input">2º Objetivo</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  placeholder='Número do Objetivo'
                  id="titulo"
                /><br/>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  placeholder='Título do Objetivo'
                  id="titulo"
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, resize: 'vertical', minHeight: '4rem' }}
                  type="text"
                  name="titulo"
                  placeholder='Descrição do Objetivo'
                  id="titulo"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width:"68.5vw" }}>
                <p className="title_input">3º Objetivo</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  placeholder='Número do Objetivo'
                  id="titulo"
                /><br/>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  placeholder='Título do Objetivo'
                  id="titulo"
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, resize: 'vertical', minHeight: '4rem' }}
                  type="text"
                  name="titulo"
                  placeholder='Descrição do Objetivo'
                  id="titulo"
                />
              </div>
          </div>
            {/*FIM INPUTS DOS 3 OBJETIVOS */}

              <br /><br />
              <p className="title_input">Imagem objetivos</p>
            <div
            className="image-preview"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedImage && !showDefaultImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                className="thumbnail"
              />
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
              Clique ou arraste para alterar o background dos objetivos
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

            {/* INPUT TEXTO COMPOMISSO HFA */}
            <br/><br/>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width:"68.5vw" }}>
                <p className="title_input">O Compromisso da HFA</p>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  placeholder='1º Parágrafo'
                  id="titulo"
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  placeholder='2º Parágrafo'
                  id="titulo"
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  placeholder='3º Parágrafo'
                  id="titulo"
                /><br/>
              </div>
            </div>
            
             
          </div>
            {/*FIM DO INPUT TEXTO COMPOMISSO HFA */}

            <p className="title_input">Imagem dos certificados</p>
          <div
            className="image-preview"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedImage && !showDefaultImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                className="thumbnail"
              />
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
              Clique ou arraste para alterar o background da imagem
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
<br /><br />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width:"68.5vw" }}>
                <p className="title_input">Parte integrante do ADN da HFA</p>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  placeholder='1º Parágrafo'
                  id="titulo"
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  placeholder='2º Parágrafo'
                  id="titulo"
                /><br/>
              </div>
            </div>
          </div>
          <p className="title_input">Imagem da parte integrante da HFA</p>
          <div
            className="image-preview"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedImage && !showDefaultImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                className="thumbnail"
              />
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
              Clique ou arraste para alterar o background da imagem
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

          {selectedImage && (
            <div>
              <button className="button-submit" type="submit">
                Guardar
              </button>
              <button className="button-cancel" type="button" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          )}
        </form>
      </div>
    );
  };


const Edithistoria = () => {
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
        <Thumbnail />
      </div>
    </div>
  );
};

export default Edithistoria;