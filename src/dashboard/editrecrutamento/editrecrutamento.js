import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './editrecrutamento.css';
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
      { key: 'listamarcador', label: 'Marcadores', onClick: () => handleMenuClick('adicionarPaginas', '#ffff00') }
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




const Testando = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showDefaultImage, setShowDefaultImage] = useState(true);
    const [imgEsquerda, setImgEsquerda] = useState('');
  
    const fileInputRef = useRef(null); // Referência ao input do arquivo
    const formRef = useRef(null); // Referência ao formulário
  
    const handleImageChange = (event) => {
      const image = event.target.files[0];
      setSelectedImage(image);
      setShowDefaultImage(false);
      props.onImageSelect(image); // Chama a função de callback com a imagem selecionada
      setImgEsquerda(image.name); // Update the imgEsquerda state with the image name
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
      props.onImageSelect(event.dataTransfer.files[0]); // Chama a função de callback com a imagem selecionada
    };
  
   
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('image', selectedImage);
  
      // Enviar nome da imagem para o servidor
      props.onSubmit(selectedImage.name);
  
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
              className="thumbnailrecrutamento"
            />
          )}
         {showDefaultImage ? (
            <img
              src={props.imagem}
              alt="Imagem do Título"
              className="thumbnailrecrutamento"
              onClick={handleDefaultImageClick}
            />
          ) : null}
        </div>
       
        <input
          type="file"
          name="imagem"
          id="imagem"
          onChange={handleImageChange}
          ref={fileInputRef} // Atribui a referência ao input de arquivo
          style={{ display: 'none' }} // Esconde o input de arquivo
        />
      </div>
    );
  };


  const Thumbnail = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showDefaultImage, setShowDefaultImage] = useState(true);
    const fileInputRef = useRef(null); // Referência ao input do arquivo
    const formRef = useRef(null); // Referência ao formulário
    const [recrutamentoData, setRecrutamentoData] = useState(null);
  
    // Esquerda
    const [imgEsquerda, setImgEsquerda] = useState('');
    const [emailEsquerda, setemailEsquerda] = useState('');
    const [telefoneEsquerda, settelefoneEsquerda] = useState('');
    const [moradaEsquerda, setmoradaEsquerda] = useState('');
  
    // Direita
    const [imgDireita, setImgDireita] = useState('');
    const [emailDireita, setemailDireita] = useState('');
    const [telefoneDireita, settelefoneDireita] = useState('');
    const [moradaDireita, setmoradaDireita] = useState('');
    const [selectedImageDireita, setSelectedImageDireita] = useState(null); // Add this line

  
    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      return () => clearInterval(timerId);
    }, []);
  
    useEffect(() => {
      fetch(`${APIHOST}/recrutamento`)
        .then((response) => response.json())
        .then((data) => {
          setRecrutamentoData(data[0]);
          // Set the value of 'img_esquerda' based on the fetched data
          const imgEsquerda = data[0].img_esquerda;
          const emailEsquerda = data[0].email_esquerda;
          const telefoneEsquerda = data[0].telefoneEsquerda;
          const moradaEsquerda = data[0].moradaEsquerda;
          const imgDireita = data[0].img_direita;
          const emailDireita = data[0].email_Direita;
          const telefoneDireita = data[0].telefoneDireita;
          const moradaDireita = data[0].moradaDireita;
          // Update the state with the value of 'img_esquerda'
          setImgEsquerda(imgEsquerda);
          setemailEsquerda(emailEsquerda);
          settelefoneEsquerda(telefoneEsquerda);
          setmoradaEsquerda(moradaEsquerda);
          setImgDireita(imgDireita);
          setemailDireita(emailDireita);
          settelefoneDireita(telefoneDireita);
          setmoradaDireita(moradaDireita);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados de recrutamento:', error);
        });
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
      formData.append('imgEsquerda', selectedImage); // Adicione a imagem selecionada da esquerda ao FormData
      formData.append('emailEsquerda', event.target.email_esquerda.value);
      formData.append('telefoneEsquerda', event.target.telefone_esquerda.value);
      formData.append('moradaEsquerda', event.target.morada_esquerda.value);
      formData.append('imgDireita', selectedImageDireita); // Adicione a imagem selecionada da direita ao FormData
      formData.append('emailDireita', event.target.email_direita.value);
      formData.append('telefoneDireita', event.target.telefone_direita.value);
      formData.append('moradaDireita', event.target.morada_direita.value);
    
      axios
        .post(`${APIHOST}/recursoupdate`, formData)
        .then((response) => {
          // Lida com a resposta do servidor, se necessário
        })
        .catch((error) => {
          // Lida com erros, se ocorrerem
        });
    };
    
  
    const handleCancel = () => {
      formRef.current.reset();
      setSelectedImage(null);
      setShowDefaultImage(true);
    };
  
    const handleImgEsquerda = (selectedImage) => {
      setSelectedImage(selectedImage);
      setShowDefaultImage(false);
    
      if (selectedImage) {
        const uniqueName = `esquerda_${Date.now()}_${selectedImage.name}`; // Adiciona um sufixo único para a imagem
        setImgEsquerda(uniqueName);
      }
    };

    const handleImgDireita = (selectedImage) => {
      setSelectedImageDireita(selectedImage); // Atualiza a imagem da direita usando setSelectedImageDireita
      setShowDefaultImage(false);
    
      if (selectedImage) {
        const uniqueName = `direita_${Date.now()}_${selectedImage.name}`;
        setImgDireita(uniqueName);
      }
    };
    
    return (
      <div>
        <h2>Editar Página da Ficha de Inscrição</h2>
        <p style={{ paddingTop: '4%', fontWeight: 'bold' }}>Alterar Cartão Esquerdo</p>
        <form onSubmit={handleSubmit} ref={formRef}>
        <Testando
  imagem={process.env.PUBLIC_URL + '/recrutamento/' + imgEsquerda}
  onImageSelect={handleImgEsquerda}
/>
         


          {!selectedImage && (
            <label htmlFor="imagem" className="image-label">
              Clique ou arraste para alterar a logo do cartão esquerdo
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
          <br />
          <br />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
                <p className="title_input">Email do cartão esquerdo</p>
                <input
                    style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                    type="text"
                    name="email_esquerda"
                    id="titulo"
                    defaultValue={recrutamentoData?.email_esquerda}
                />

              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
                <p className="title_input">Telefone do cartão esquerdo</p>
                <input
                    style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                    placeholder="Escreva o telefone do cartão esquerdo"
                    type="text"
                    name="telefone_esquerda"
                    id="titulo"
                    defaultValue={recrutamentoData?.telefone_esquerda}
                />
                
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
                <p className="title_input">Morada do cartão esquerdo</p>
                <input
                    style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                    placeholder="Escreva o morada do cartão esquerdo"
                    type="text"
                    name="morada_esquerda"
                    id="titulo"
                    defaultValue={recrutamentoData?.morada_esquerda}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/*FIM DO INPUT TITULO */}
  
          {/*INPUT IMAGEM PRINCIPAL */}
          
      <p style={{ paddingTop: '4%', fontWeight: 'bold' }}>Alterar Cartão Direito</p>
      <Testando
  imagem={process.env.PUBLIC_URL + '/recrutamento/' + imgDireita}
  onImageSelect={handleImgDireita}
/>
          {/*FIM INPUT IMAGEM PRINCIPAL */}
  
          {/*INPUT TITULO */}
          <br />
          <br />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
                <p className="title_input">Email do cartão direito</p>
                <input
                    style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                    placeholder="Escreva o email do cartão direito"
                    type="text"
                    name="email_direita"
                    id="titulo"
                    defaultValue={recrutamentoData?.email_direita}
                />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
                <p className="title_input">Telefone do cartão direito</p>
                <input
                    style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                    placeholder="Escreva o telefone do cartão direito"
                    type="text"
                    name="telefone_direita"
                    id="titulo"
                    defaultValue={recrutamentoData?.telefone_direita}
                />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
              <input
                    style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                    placeholder="Escreva o morada do cartão direito"
                    type="text"
                    name="morada_direita"
                    id="titulo"
                    defaultValue={recrutamentoData?.morada_direita}
                />
              </div>
            </div>
          </div>
          {/*FIM DO INPUT TITULO */}
  
          <div>
            <button className="button-submit" type="submit">
              Guardar
            </button>
            <button className="button-cancel" type="button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  };



  

const EditFichaInsc = () => {
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

export default EditFichaInsc;