
import { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './video.css';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';
import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIHOST from '../constant';
import Modal from 'react-modal';


{/* Maior div do lado esquerdo da página */}

class Quadrado extends Component {
  componentDidMount() {
    const videoUrl = this.props.videooo;
    
    this.sendVideoToServer(videoUrl);
  }
  
  sendVideoToServer = async (videoUrl) => {
    try {
      const response = await axios.get(`${APIHOST}/viewvideoquadrado/${encodeURIComponent(videoUrl)}`);
      // Processar a resposta aqui, se necessário
      console.log(response.data);
    } catch (error) {
      // Lidar com erros que ocorrerem durante a requisição
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <div className='noticia_menu_noticia'>
          <iframe
            style={{ height: '100%', width: '101%' }}
            src={`${this.props.videooo}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    );
  }
}

{/* Texto simples de noticias */}
class Mais extends Component{
    render() {
        return(
            <div className='mais_noticias_menu_noticia'>
               
              <h2 className='mais_menu_noticia'>{this.props.nomemeio}</h2>
              
            </div>
        );
    }
}


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      videoId: null,
    };
  }
  
    openModal = () => {
      this.setState({ isModalOpen: true });
    };
  
    closeModal = () => {
      this.setState({ isModalOpen: false });
    };
  
    handleVideoClick = async () => {
      const videoId = this.extractVideoId(this.props.videoo);
      this.setState({ videoId });
      this.openModal();
      
      try {
        const response = await axios.get(`${APIHOST}/viewvideo/${videoId}`);
        // Process the response data here
        console.log(response.data);
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
      }
    };
  
    extractVideoId(url) {
      const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/(?:watch\?v=|v\/|embed\/|user\/[^/]+\/+[^#\&\?]*))?([^\#\&\?]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    }
    
  
    render() {
      const videoId = this.extractVideoId(this.props.videoo);
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      
      return (
        <div className="div_noticia_menu_noticia">
          <button style={{ border: "none" }} onClick={this.handleVideoClick}>
          <div className="video-thumbnail-inner">
            <img className="miniatura" style={{ height: "100%", width: "101%" }} src={thumbnailUrl}/>
            
            <svg
              className="play-button"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
        
          </div>
      <h3 style={{ height: "100%", width: "101%", fontFamily: "'Titillium Web', sans-serif" }}> {this.props.titulo_video} </h3>
    </button>
    
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Video Modal" 
            style={{
                content: {
                  overflowY: 'hidden',
                  height: '50vh',
                  marginLeft:'10%',
                  marginRight : '10%',
                  marginTop: '7%',
                },
              }}
    >  

<button style={{ display: "none" }} className="close-button" onClick={this.closeModal}>
  {/* adicione o conteúdo do botão aqui, se necessário ...O btão está com display: "none" para não aparecer */}
  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
</button>

            <iframe
              style={{ height: "100%", width: "100%" }}
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </Modal>
        </div>
      );
    }
  }


{/* Rodapé dá pagina do lado esquerdo */}
class Footer extends Component{
    render() {
        return( 
            <div className='footer_menu_noticia'>
                <br />
                <p className='Text-footerr_menu_noticia' style={{ color: "rgb(168, 168, 168)" }}>{this.props.footer_developed}<a style={{ color: "white" ,fontWeight: "bold" }}>{this.props.footer_nome}</a></p>

                <div className='Copy_menu_noticia'>
                    <p className='Text-footer_menu_noticia' style={{ color: "rgb(168, 168, 168)" }}>{this.props.footer_copyright}</p>
                    <p className='Text-footer_menu_noticia'>{this.props.footer_termos}</p>
                    <p className='Text-footer_menu_noticia'>{this.props.footer_politica}</p>
                    <p className='Text-footer_menu_noticia'>{this.props.footer_cookies}</p>
                </div>
                <br />
            </div>
        );
    }
}

{/* Conteudo do menu direito contendo imagem e texto */}
class Conteudo_menu extends Component{
    render() {
        return( 
            <div className='conteudo_menu_menu_noticia'>
               <img className='imgbarra_menu_video'  src={this.props.menu_img}  />  
                <h1 style={{color: "#072d49", fontFamily : "'Titillium Web', sans-serif", fontSize: "4vh"}}>{this.props.menu_titulo}</h1>
                <p style={{ color: "#47555c",marginLeft : "5%", marginRight: "5%", fontSize: "2.3vh"}}><p>{this.props.menu_texto1}</p><p>{this.props.menu_texto2}</p></p>       
            </div>
        );
    }
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


{/* Rodapé do menu direito */}

class Footer_menu extends Component{
    render() {
        return(
            <Link to="/" style={{ textDecoration: 'none' }}> 
            <div className='footer_menu_menu_video'>
                
                   <h1>{this.props.footer_texto}</h1>
                
            </div>
            </Link>
        );
    }
}

class Btn_menu extends Component{
    render() {
        return(
                <div>
                    <Link to="/menu" style={{ textDecoration: 'none' }}> 
                        <svg className='svg_menu_menu_noticia' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </Link>
                    <p className='text_menu_menu_noticia'>{this.props.btn_menu_text}</p>    
                </div>

            );
        }
    }
{/* Exibição de todos os componentes */}
function Videos() {

    const [video, setNoticias] = useState([]);
    const [ultimoVideo, setUltimoVideo] = useState(null);
      useEffect(() => {
        axios.get(`${APIHOST}/videos`)
        .then((response) => {
          setNoticias(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      
    axios.get(`${APIHOST}/videos/ultima`)
     .then((response) => {
    
        setUltimoVideo(response.data[0]); // define o valor da última notícia
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

    return (
     <div className='pagina_menu_noticia'>
       
        <div className='esquerda_menu_noticia'>
        {ultimoVideo && (

            <Quadrado
                videooo={ultimoVideo.url_video} 
            
            />
            
            )}
            
            <Mais nomemeio="HFA - Eletrónica e Telecomunicações" />
            
            <div className="container_menu_video">
                
                <Container>
                        <Row>
                        {video.slice(1).map((video) => (
                            <Col sm={3.98}> 
                            
                                <Video
                                  videoId={video.id} // Pass the video ID as a prop
                                  videoo={video.url_video} 
                                  titulo_video={video.titulo_video}
                                  
                                />
                                
                                
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
                footer_cookies="COOKIES "


           />

        </div>
        
        <div className='direita_menu_noticia' >
            <div className='barra_hora_menu_noticia'>
              
                <Container>
                    <Row>

                        <Col sm={4}>
                            <Btn_menu 
                                btn_menu_text="MENU"
                            />
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
                            <Conteudo_menu 
                                menu_titulo="ATENDIMENTO"
                                m menu_texto1="Para ser atendido, consoante a sua necessidade, escolha nos botões abaixo o departamento. "
                                menu_texto2="Enquanto aguarda, navegue pela nossa plataforma para saber mais sobre nós!"
                                menu_img="https://showroom.portugalbikevalue.pt/wp-content/uploads/2021/05/HFA-Logo-Dark.png"
                            />
                        </Col>

                        <Col>
                            <Botao 
                                btn1_menu="Recursos Humanos"
                                btn2_menu="Compras"
                                btn3_menu="Planeamento"
                            />
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <Footer_menu 
                                footer_texto="Página principal"

                            />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        </div>
     </div>
    );
  }

export default Videos;