import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './editnoticia';
import APIHOST from '../../constant';


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
    const { idnotev } = useParams();
    const [noticia, setNoticia] = useState({});
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [descr, setDescr] = useState('');
    const [data, setData] = useState('');
    const [imagem, setImagem] = useState('');
  
    useEffect(() => {
      const fetchNoticia = async () => {
        try {
          const response = await axios.get(`${APIHOST}/dadosnoticiaedit/${idnotev}`);
          console.log(response.data); // Verifique os dados retornados no console
  
          if (response.data.length > 0) {
            setNoticia(response.data[0]);
            setTitulo(response.data[0].titulo_notev);
            setConteudo(response.data[0].conteudo_notev);
            setDescr(response.data[0].descr_notev);
            setData(response.data[0].data_notev);
            setImagem(response.data[0].imagem_notev);
          } else {
            // Lógica para lidar com o caso em que não há dados da notícia
            console.log('Dados da notícia não encontrados');
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchNoticia();
    }, [idnotev]);
  
    // ...
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timerId);
      };
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
        formData.append('titulo', titulo);
        formData.append('descricao', descr);
        formData.append('data', data); // Substitua 'your_data_value' pelo valor real
        formData.append('imagem', selectedImage);
        
        axios.post(`http://localhost:3001/updateNoticia/${idnotev}`, formData)
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
        <h2>Editar Notícia</h2>
        <p style={{ paddingTop: '4%', fontWeight: 'bold' }}>Thumbnail</p>
        <form onSubmit={handleSubmit} ref={formRef}>
        <div className="image-preview" onDragOver={handleDragOver} onDrop={handleDrop}>
          {selectedImage && !showDefaultImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="thumbnail" />
          )}
          
          {showDefaultImage && (
            <img
            src={imagem ? '/' + imagem : ''}
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
                name="titulo" // Certifique-se de que o nome do campo seja "titulo"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />

              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="title_input">Data</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none' }}
                  type="text"
                  name="data"
                  id="data"
                  value={data.slice(0, 10)}
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
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            ></textarea>
          </div>
  
          
            <div>
              <button className="button-submit" type="submit">
                SAVE
              </button>
              <button className="button-cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          
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
        { key: 'listaEventos', label: 'Ver Lista de Eventos', onClick: () => handleMenuClick('listaEventos', '#00ff00') },
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



const Editnoticia = () => {
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

export default Editnoticia;
