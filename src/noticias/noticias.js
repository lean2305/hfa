import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './noticias.css';
import Clock from './clock';
import ExibirDataAtual from './date';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIHOST from '../constant';
import React, { Component } from 'react';


function Quadrado(props) {
  return (
    <div>
      <div className='noticia_menu_noticia'>
        <div className='texto_menu_noticia'>
          <p className='titulo_menu_noticia'>{props.quadrado_catgoria}</p>
          <br />
          <h3 className='titulo_menu_noticia'>{props.quadrado_titulo}</h3>
          <br /><br />
          <p className='titulo_menu_noticia'>{props.quadrado_texto}</p>
          <br /><br /><p className='titulo_menu_noticia'>{props.quadrado_data}</p>
        </div>
        <div className='img_menu_noticia'>
          <img src={props.quadrado_img} />
        </div>
      </div>
    </div>
  );
}



function Mais(props) {
  return (
    <div className='mais_noticias_menu_noticia'>
      <h2 className='mais_menu_noticia'>{props.nomemeio}</h2>
    </div>
  );
}



function Noticia(props) {
  return (
    <div className='div_noticia_menu_noticia'>
      <img className='imgbarra_menu_noticia' src={props.noticia_img} />
      <div className='texto_menu_noticia'>
        <p className='p_menu_noticia'>{props.barra}</p>
        <h4>{props.noticia_titulo}</h4>
        <p>{props.noticia_texto}</p>
        <br /><p>{props.noticia_data}</p>
      </div>
    </div>
  );
}



function Footer(props) {
  return (
    <div className='footer_menu_noticia'>
      <br />
      <p className='Text-footerr_menu_noticia' style={{ color: "rgb(168, 168, 168)" }}>{props.footer_developed}<a style={{ color: "white", fontWeight: "bold" }}>{props.footer_nome}</a></p>
      <div className='Copy_menu_noticia'>
        <p className='Text-footer_menu_noticia' style={{ color: "rgb(168, 168, 168)" }}>{props.footer_copyright}</p>
        <p className='Text-footer_menu_noticia'>{props.footer_termos}</p>
        <p className='Text-footer_menu_noticia'>{props.footer_politica}</p>
        <p className='Text-footer_menu_noticia'>{props.footer_cookies}</p>
      </div>
      <br />
    </div>
  );
}



function ConteudoMenu(props) {
  return (
    <div className='conteudo_menu_menu_noticia'>
      <img className='imgbarra_menu_noticia' src={props.menu_img} />
      <h1 style={{ color: "#072d49", fontFamily: "'Titillium Web', sans-serif", fontSize: "4vh" }}>{props.menu_titulo}</h1>
      <p style={{ color: "#47555c", marginLeft: "5%", marginRight: "5%", fontSize: "2.3vh" }}>{props.menu_texto}</p>
    </div>
  );
}




{/* Botões do menu direito */}
class Botao extends Component {
    state = {
      marcadores: []
    };
  
    componentDidMount() {
      axios.get(`${APIHOST}/marcador`) // Substitua "URL_DO_SERVIDOR" pela URL correta para obter os marcadores
        .then(response => {
          this.setState({ marcadores: response.data });
        })
        .catch(error => {
          console.error('Houve um problema ao obter os marcadores:', error);
        });
    }
  
    handleButtonClick = (url) => {
      fetch(url, { method: 'GET' })
        .then(response => {
          if (!response.ok) {
            throw new Error('A resposta da rede não foi ok');
          }
        })
        .catch(error => {
          console.error('Houve um problema com a operação fetch:', error);
        });
    };
  
    render() {
      const { marcadores } = this.state;
  
      return (
        <div className='menu_botao'>
          {marcadores.map(marcador => (
            <button
              key={marcador.idmarcador}
              style={{
                border: "2px solid #47555c",
                borderRadius: "4px",
                backgroundColor: "transparent",
                color: "#42525a",
                padding: "8px 16px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "2vh",
                marginLeft: "4%",
                marginTop: "4%"
              }}
              onClick={() => this.handleButtonClick(marcador.contacto_marcador)}
            >
              {marcador.nome_marcador}
            </button>
          ))}
        </div>
      );
    }
  }




function FooterMenu(props) {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className='footer_menu_menu_noticia'>
        <h1>{props.footer_texto}</h1>
      </div>
    </Link>
  );
}



function BtnMenu(props) {
  return (
    <div>
      <Link to="/menu" style={{ textDecoration: 'none' }}>
        <svg className='svg_menu_menu_noticia' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
      </Link>
      <p className='text_menu_menu_noticia'>{props.btn_menu_text}</p>
    </div>
  );
}




function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [ultimaNoticia, setUltimaNoticia] = useState(null);

  useEffect(() => {
    axios.get(`${APIHOST}/noticias`)
      .then((response) => {
        setNoticias(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`${APIHOST}/noticias/ultima`)
      .then((response) => {
        setUltimaNoticia(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='pagina_menu_noticia'>
      <div className='esquerda_menu_noticia'>

      <Link to={`/pagina_noticia/${ultimaNoticia ? ultimaNoticia.idnotev : ''}`} className="link-noticia">
        <Quadrado
          quadrado_catgoria={ultimaNoticia ? ultimaNoticia.categoria_notev : ''}
          quadrado_titulo={ultimaNoticia ? ultimaNoticia.titulo_notev : ''}
          quadrado_texto={ultimaNoticia ? ultimaNoticia.descr_notev.slice(0, 205) + "..." : ''}
          quadrado_data={ultimaNoticia ? ultimaNoticia.data_notev.slice(0, 10) : ''}
          quadrado_img={ultimaNoticia ? process.env.PUBLIC_URL + '/uploads/' + ultimaNoticia.imagem_notev : ''}
        />
         </Link>
         
        <Mais nomemeio="MAIS NOTICIAS & EVENTOS" />
        <div className="container_menu_noticia">
          <Container>
            <Row>
              {noticias.slice(1).map((noticia) => (
                <Col sm={4} key={noticia.idnotev}>
                    <Link to={`/pagina_noticia/${noticia.idnotev}`} className="link-noticia">
                    <Noticia
                        barra={noticia.categoria_notev}
                        noticia_titulo={noticia.titulo_notev}
                        noticia_texto={noticia.descr_notev.slice(0, 100) + "..."}
                        noticia_data={noticia.data_notev.slice(0, 10) + "       "}
                        noticia_img={process.env.PUBLIC_URL+ '/uploads/'  + noticia.imagem_notev}
                        
                    />
                    </Link>
                </Col>
               ))}
            </Row>
          </Container>
        </div>
        <Footer
          footer_developed="Developed by "
          footer_nome="HFA"
          footer_copyright="© COPYRIGHT 2020 HFA / ALL RIGHTS RESERVED"
          footer_termos="TERMOS & CONDIÇÕES"
          footer_politica="POLÍTICA DE PRIVACIDADE"
          footer_cookies="COOKIES " />
      </div>
      <div className='direita_menu_noticia' >
        <div className='barra_hora_menu_noticia'>
          <Container>
            <Row>
              <Col sm={4}>
                <BtnMenu
                  btn_menu_text="MENU" />
              </Col>
              <Col sm={4}>
                <Clock />
              </Col>
              <ExibirDataAtual />
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <ConteudoMenu
                  menu_titulo="ATENDIMENTO"
                  menu_texto="Para ser atendido, consoante a sua necessidade, escolha nos botões abaixo o departamento. Enquanto aguarda, navegue pela nossa plataforma para saber mais sobre nós!"
                  menu_img="https://showroom.portugalbikevalue.pt/wp-content/uploads/2021/05/HFA-Logo-Dark.png" />
              </Col>
              <Col>
                <Botao
                  btn1_menu="Recursos Humanos"
                  btn2_menu="Compras"
                  btn3_menu="Planeamento" />
              </Col>
            </Row>
            <Row>
              <Col>
                <FooterMenu
                  footer_texto="Página principal" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
