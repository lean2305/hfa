import React, { useState, useEffect, useRef } from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './edithistoria.css';
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
      { key: 'marcador', label: 'Tabela de marcadores', onClick: () => handleMenuClick('adicionarPaginas', '#ffff00') }
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
 
  const fileInputRef = useRef(null); // Referência ao input do arquivo
  const formRef = useRef(null); // Referência ao formulário

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setShowDefaultImage(false);
    props.onImageSelect(event.target.files[0]); // Chama a função de callback com a imagem selecionada
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
            className="thumbnail"
          />
        )}
       {showDefaultImage ? (
          <img
            src={props.imagem}
            alt="Imagem do Título"
            className="thumbnail"
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
    const [selectedImagee, setSelectedImagee] = useState(null);
    const [selectedImageee, setSelectedImageee] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showDefaultImage, setShowDefaultImage] = useState(true);
    const fileInputRef = useRef(null); // Referência ao input do arquivo
    const formRef = useRef(null); // Referência ao formulário

    //imagens e texto
    const [imagemTitulo, setImagemTitulo] = useState('');
    const [titulo, setTitulo] = useState('');
    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');
    const [imgHistoria, setImgHistoria] = useState('');
    const [objetivo01, setObjetivo01] = useState('');
    const [objetivo01Titulo, setObjetivo01Titulo] = useState('');
    const [objetivo01Texto, setObjetivo01Texto] = useState('');
    const [objetivo02, setObjetivo02] = useState('');
    const [objetivo02Titulo, setObjetivo02Titulo] = useState('');
    const [objetivo02Texto, setObjetivo02Texto] = useState('');
    const [objetivo03, setObjetivo03] = useState('');
    const [objetivo03Titulo, setObjetivo03Titulo] = useState('');
    const [objetivo03Texto, setObjetivo03Texto] = useState('');
    const [objetivoImg, setObjetivoImg] = useState('');
    const [compromisso1, setCompromisso1] = useState('');
    const [compromisso2, setCompromisso2] = useState('');
    const [compromisso3, setCompromisso3] = useState('');
    const [certificado1, setCertificado1] = useState('');
    const [certificado2, setCertificado2] = useState('');
    const [certificado3, setCertificado3] = useState('');
    const [certificado4, setCertificado4] = useState('');
    const [certificado5, setCertificado5] = useState('');
    const [texto1_integrante, setTexto1integrante] = useState('');
    const [texto2_integrante, setTexto2integrante] = useState('');
    const [img_integrante, setImgIntegrante] = useState('');

    //carregar dados apenas
    const [dadosCarregados, setDadosCarregados] = useState(false);
    const inputValue = `${imagemTitulo}`;
    const img_Historia = `${imgHistoria}`;
    const img_Objetivo = `${objetivoImg}`;
    

    
    
    useEffect(() => {
      const fetchNoticia = async () => {
        try {
          const response = await axios.get(`${APIHOST}/historia`);
          console.log(response.data); // Verifique os dados retornados no console
    
          if (response.data.length > 0) {
            const {
              imagem_titulo,
              titulo,
              texto_1,
              texto_2,
              img_historia,
              objetivo_01,
              objetivo_01_titulo,
              objetivo_01_texto,
              objetivo_02,
              objetivo_02_titulo,
              objetivo_02_texto,
              objetivo_03,
              objetivo_03_titulo,
              objetivo_03_texto,
              objetivo_img,
              compromisso1,
              compromisso2,
              compromisso3,
              certificado1,
              certificado2,
              certificado3,
              certificado4,
              certificado5,
              texto1_integrante,
              texto2_integrante,
              img_integrante,
            } = response.data[0];
    
            setImagemTitulo(imagem_titulo);
            setTitulo(titulo);
            setTexto1(texto_1);
            setTexto2(texto_2);
            setImgHistoria(img_historia);
            setObjetivo01(objetivo_01);
            setObjetivo01Titulo(objetivo_01_titulo);
            setObjetivo01Texto(objetivo_01_texto);
            setObjetivo02(objetivo_02);
            setObjetivo02Titulo(objetivo_02_titulo);
            setObjetivo02Texto(objetivo_02_texto);
            setObjetivo03(objetivo_03);
            setObjetivo03Titulo(objetivo_03_titulo);
            setObjetivo03Texto(objetivo_03_texto);
            setObjetivoImg(objetivo_img);
            setCompromisso1(compromisso1);
            setCompromisso2(compromisso2);
            setCompromisso3(compromisso3);
            setCertificado1(certificado1);
            setCertificado2(certificado2);
            setCertificado3(certificado3);
            setCertificado4(certificado4);
            setCertificado5(certificado5);
            setTexto1integrante(texto1_integrante);
            setTexto2integrante(texto2_integrante);
            setImgIntegrante(img_integrante);
          } else {
            // Lógica para lidar com o caso em que não há dados na resposta da API
            console.log('Dados não encontrados');
          }
          setDadosCarregados(true);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchNoticia();
    }, []);
    
    const handleImgHistoriaChange = (event) => {
      setImgHistoria(event.target.value);
    };

    const handleImgObjetivoChange = (event) => {
      setObjetivoImg(event.target.value);
    };

    const handleCertificado1Change = (event) => {
      setCertificado1(event.target.value);
    };
    const handleCertificado2Change = (event) => {
      setCertificado2(event.target.value);
    };

    const handleCertificado3Change = (event) => {
      setCertificado3(event.target.value);
    };
    const handleCertificado4Change = (event) => {
      setCertificado4(event.target.value);
    };
    const handleCertificado5Change = (event) => {
      setCertificado5(event.target.value);
    };
    const handleIntegranteChange = (event) => {
      setImgIntegrante(event.target.value);
    };
  
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
    
      
    const handleCancel = () => {
      formRef.current.reset();
      setSelectedImage(null);
      setShowDefaultImage(true);
    };
  
    
      const inputStyle = {
       
      };

      const handleImageSelect = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const imageName = selectedImage.name;
          setImagemTitulo(imageName); // Assuming you want to update the `imagemTitulo` state with the image name
         
        }
      };

      const handleImgHistoria = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const imgHistororia = selectedImage.name;
          setImgHistoria(imgHistororia);
        }
      };

      

      const handleImgObjetivo = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const imgObjetivoo = selectedImage.name;
          setObjetivoImg(imgObjetivoo);
        }
      };

      const handleCertificado1 = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const iimgcertificado1 = selectedImage.name;
          setCertificado1(iimgcertificado1);
        }
      };

      const handleCertificado2 = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const iimgcertificado2 = selectedImage.name;
          setCertificado2(iimgcertificado2);
        }
      };

      const handleCertificado3 = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const iimgcertificado3 = selectedImage.name;
          setCertificado3(iimgcertificado3);
        }
      };

      const handleCertificado4 = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const iimgcertificado4 = selectedImage.name;
          setCertificado4(iimgcertificado4);
        }
      };

      const handleCertificado5 = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const iimgcertificado5 = selectedImage.name;
          setCertificado5(iimgcertificado5);
        }
      };

      const handleIntegrante = (selectedImage) => {
        setSelectedImage(selectedImage);
        setShowDefaultImage(false);
      
        if (selectedImage) {
          const iimgintegrante = selectedImage.name;
          setImgIntegrante(iimgintegrante);
        }
      };


      const handleTituloChange = (event) => {
        setTitulo(event.target.value);
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        const requestData = {
          inputValue: inputValue,
          titulo: titulo,
          texto1: texto1,
          texto2: texto2,
          imgHistoria: imgHistoria,
          objetivo01:objetivo01,
          objetivo01Titulo:objetivo01Titulo,
          objetivo01Texto : objetivo01Texto,
          objetivo02 : objetivo02,
          objetivo02Titulo : objetivo02Titulo,
          objetivo02Texto : objetivo02Texto,
          objetivo03 : objetivo03,
          objetivo03Titulo : objetivo03Titulo,
          objetivo03Texto : objetivo03Texto,
          objetivoImg : objetivoImg,
          compromisso1 : compromisso1,
          compromisso2 : compromisso2,
          compromisso3 : compromisso3,
          certificado1 : certificado1,
          certificado2 : certificado2,
          certificado3 : certificado3,
          certificado4 : certificado4,
          certificado5 : certificado5,
          texto1_integrante : texto1_integrante,
          texto2_integrante : texto2_integrante,
          img_integrante : img_integrante,
        };
      
        axios
          .post(`${APIHOST}/uploadhistoria`, requestData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
      
      
      
    return (
      <div id="myForm">
        <h2>Editar Página</h2>
        <p style={{ paddingTop: '4%', fontWeight: 'bold' }}>Alterar Thumbnail</p>
        <form onSubmit={handleSubmit} ref={formRef}>

            {/*INPUT IMAGEM PRINCIPAL */}
            {dadosCarregados && (<Testando imagem={`/historia_img/${imagemTitulo}`} onImageSelect={handleImageSelect} />)}
            <input type="text" value={inputValue} style={inputStyle} />

            {/*FIM INPUT IMAGEM PRINCIPAL */}
            <label htmlFor="imagem" className="image-label">
              Clique ou arraste
            </label>
            {/*INPUT TITULO */}
          <br/><br/>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width: '68.5vw' }}>
                <p className="title_input">Título da Página</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  value={titulo}
                  type="text"
                  name="titulo"
                  id="titulo"
                  onChange={handleTituloChange}
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
              value={texto1}
              name="descricao"
              id="descricao"
              onChange={(event) => setTexto1(event.target.value)}
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
              value={texto2}
              name="descricao"
              id="descricao"
              onChange={(event) => setTexto2(event.target.value)}
            ></textarea>
            <br/>
            <p className="title_input">Imagem historia</p>
            {dadosCarregados && (<Testando imagem={`/historia_img/${imgHistoria}`} onImageSelect={handleImgHistoria} />)}
            <input
                type="text"
                value={imgHistoria}
                style={inputStyle}
                onChange={handleImgHistoriaChange}
            />


            {!selectedImage && (
            <label htmlFor="imagem" className="image-label">
              Clique ou arraste
            </label>
          )}
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
                  value={objetivo01}
                  name="titulo"
                  id="titulo"
                  onChange={(event) =>  setObjetivo01(event.target.value)}
                /><br/>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  value={objetivo01Titulo}
                  id='titulo'
                  onChange={(event) =>  setObjetivo01Titulo(event.target.value)}
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, resize: 'vertical', minHeight: '4rem' }}
                  type="text"
                  name="titulo"
                  value={objetivo01Texto}
                  id="titulo"
                  onChange={(event) =>  setObjetivo01Texto(event.target.value)}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width:"68.5vw" }}>
                <p className="title_input">2º Objetivo</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  value={objetivo02}
                  id="titulo"
                  onChange={(event) =>  setObjetivo02(event.target.value)}
                /><br/>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  value={objetivo02Titulo}
                  id="titulo"
                  onChange={(event) =>  setObjetivo02Titulo(event.target.value)}
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, resize: 'vertical', minHeight: '4rem' }}
                  type="text"
                  name="titulo"
                  value={objetivo02Texto}
                  id="titulo"
                  onChange={(event) =>  setObjetivo02Texto(event.target.value)}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem', width:"68.5vw" }}>
                <p className="title_input">3º Objetivo</p>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  value={objetivo03}
                  id="titulo"
                  onChange={(event) =>  setObjetivo03(event.target.value)}
                /><br/>
                <input
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10 }}
                  type="text"
                  name="titulo"
                  value={objetivo03Titulo}
                  id="titulo"
                  onChange={(event) =>  setObjetivo03Titulo (event.target.value)}
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, resize: 'vertical', minHeight: '4rem' }}
                  type="text"
                  name="titulo"
                  value={objetivo03Texto}
                  id="titulo"
                  onChange={(event) =>  setObjetivo03Texto(event.target.value)}
                />
              </div>
          </div>
            {/*FIM INPUTS DOS 3 OBJETIVOS */}

              <br /><br />
              <p className="title_input">Imagem objetivos</p>
              {dadosCarregados && (<Testando imagem={`/historia_img/${objetivoImg}`} onImageSelect={handleImgObjetivo} />)}
            <input
                type="text"
                value={objetivoImg}
                style={inputStyle}
                onChange={handleImgObjetivoChange}
                
            />
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
                  value={compromisso1}
                  id="titulo"
                  onChange={(event) =>  setCompromisso1(event.target.value)}
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  value={compromisso2}
                  id="titulo"
                  onChange={(event) =>  setCompromisso2(event.target.value)}
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  value={compromisso3}
                  id="titulo"
                  onChange={(event) =>  setCompromisso3(event.target.value)}
                /><br/>
              </div>
            </div>
            
             
          </div>
            {/*FIM DO INPUT TEXTO COMPOMISSO HFA */}

            <p className="title_input">Imagem dos certificados</p>
              <div style={{display:'flex'}}>

                {dadosCarregados && (<Testando imagem={`/certificados/${certificado1}`} onImageSelect={handleCertificado1} />)}

                {dadosCarregados && (<Testando imagem={`/certificados/${certificado2}`} onImageSelect={handleCertificado2} />)}
                {dadosCarregados && (<Testando imagem={`/certificados/${certificado3}`} onImageSelect={handleCertificado3} />)}
                
              </div>
              <div style={{display:'flex'}}>
                {dadosCarregados && (<Testando imagem={`/certificados/${certificado4}`}  onImageSelect={handleCertificado4} />)}
                {dadosCarregados && (<Testando imagem={`/certificados/${certificado5}`}  onImageSelect={handleCertificado5} />)}
                
              </div>
          {!selectedImage && (
            <label htmlFor="imagem" className="image-label">
              Arraste 
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
                  value={texto1_integrante}
                  id="titulo"
                  onChange={(event) =>   setTexto1integrante(event.target.value)}
                /><br/>
                <textarea
                  style={{ backgroundColor: 'rgb(201 200 200)', border: 'none', borderRadius: 10, padding: 10, minHeight: '4rem', resize: 'vertical' }}
                  type="text"
                  name="titulo"
                  value={texto2_integrante}
                  id="titulo"
                  onChange={(event) =>   setTexto2integrante(event.target.value)}
                /><br/>
              </div>
            </div>
          </div>
          <p className="title_input">Imagem da parte integrante da HFA</p>
          {dadosCarregados && (<Testando imagem={`/historia_img/${img_integrante}`}   onImageSelect={handleIntegrante} />)}
         
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