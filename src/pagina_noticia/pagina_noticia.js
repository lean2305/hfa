import { Component } from "react";
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './pagina_noticia.css';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import APIHOST from '../constant';


{/* Conteudo do menu direito contendo imagem e texto */}
class Conteudo_menu extends Component{
    render() {
        return( 
            <div className='conteudo_menu'>
               <img className='imgbarra' src={this.props.menu_logo}  />  
                <h1 style={{color: "#072d49", fontFamily : "'Titillium Web', sans-serif", fontSize: "4vh"}}>{this.props.menu_titulo}</h1>
                <p style={{ color: "#47555c",marginLeft : "5%", marginRight: "5%", fontSize: "2.3vh"}}><p>{this.props.menu_texto1}</p><p>{this.props.menu_texto2}</p></p>       
            </div>
        );
    }
}

{/* Botões do menu direito */}
class Botao extends Component{
    render() {
        return( 
            <div className='menu_botao'>
              
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", fontSize: "2vh"}}>{this.props.botao_1}</button>
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginLeft: "4%", fontSize: "2vh"}}>{this.props.botao_2}</button>
                <br />
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginTop: "4%", fontSize: "2vh"}}>{this.props.botao_3}</button>
                
                
            </div>
        );
    }
}


class Noticia extends Component {
    render() {
      return (
        <div className="noticia">
          <div className="noticia_esquerda_img">
            <img
              style={{ paddingBottom: '4%', objectFit: 'cover' }}
              className="svg"
              width="100%"
              height="40%"
              src={this.props.noticia}
              alt="Logo"
            />
            <strong className="noticia_strong">{this.props.strong}</strong> <br /> <br />
            <div className="mais_noticias">
              {this.props.noticia01 && (
                <Link to={`/pagina_noticia/${this.props.noticia01.idnotev}`}>
                  <img
                    style={{ paddingBottom: '4%', paddingRight: '5%', objectFit: 'cover', marginRight: '4vh' }}
                    className="svg"
                    width="130vh"
                    height="100vh"
                    src={this.props.noticia01.imagem_notev}
                    alt="Logo"
                  />
                </Link>
              )}
              {this.props.noticia02 && (
                <Link to={`/pagina_noticia/${this.props.noticia02.idnotev}`}>
                  <img
                    style={{ paddingBottom: '4%', paddingRight: '5%', objectFit: 'cover', marginRight: '4vh' }}
                    className="svg"
                    width="130vh"
                    height="100vh"
                    src={this.props.noticia02.imagem_notev}
                    
                    alt="Logo"
                  />
                </Link>
              )}
              {this.props.noticia03 && (
                <Link to={`/pagina_noticia/${this.props.noticia03.idnotev}`}>
                  <img
                    style={{ paddingBottom: '4%', paddingRight: '5%', objectFit: 'cover', marginRight: '4vh' }}
                    className="svg"
                    width="130vh"
                    height="100vh"
                    src={this.props.noticia03.imagem_notev}
                    alt="Logo"
                  />
                </Link>
              )}
            </div>
          </div>
  
          <div className="noticia_direita">
            <strong className="noticia_strong">{this.props.NoticiasEventos}</strong>
            <h1>{this.props.titulo_noticia}</h1>
            <p style={{ color: 'rgb(165, 165, 165)' }}>{this.props.data_noticia}</p>
            <hr style={{ border: 'none', height: '3px', backgroundColor: 'rgb(165, 165, 165)' }} />
            <p style={{ color: '#636363' }}>{this.props.texto_noticia1}</p>
          </div>
        </div>
      );
    }
  }
  

{/* Rodapé dá pagina do lado esquerdo */}
class Footer extends Component{
    render() {
        return( 
            <div className='footer'>
                <br />
                <p className='Text-footerr' style={{ color: "rgb(168, 168, 168)" }}>{this.props.developed}<a style={{ color: "white" ,fontWeight: "bold" }}>{this.props.by}</a></p>

                <div className='Copy'>
                    <p className='Text-footer' style={{ color: "rgb(168, 168, 168)" }}>{this.props.copyright}</p>
                    <p className='Text-footer'>{this.props.termos}</p>
                    <p className='Text-footer'>{this.props.politica}</p>
                    <p className='Text-footer'>{this.props.cookies}</p>
                </div>
                <br />
            </div>
        );
    }
}


class Footer_menu extends Component{
    render() {
        return(
            <div className='footer_menu_wrapper'>
                <div className='footer_menuu'>
                    <div className='button_wrapper'>
                        <Link to="/noticias" style={{ textDecoration: 'none' }}>
                            <div style={{backgroundColor: '#63b8e3'}} className='button'>
                                <h2 style={{fontSize: '3vh'}}>{this.props.footer_btn1}</h2>
                            </div>
                        </Link>
                    </div>
                    
                    <div className='button_wrapper'>
                        <Link to="/noticias" style={{ textDecoration: 'none' }}>
                            <div className='button'>
                                <h2 style={{fontSize: '3vh'}}>{this.props.footer_btn2}</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

          
        );
    }
}

class Col_menu extends Component{
    render() {
        return(
            <div>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                    <svg className='svg_menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </Link>
                <p className='text_menu'>{this.props.col_text_menu}</p>    
            </div>
        );
    }
}

function PaginaNoticia() {
    const { idnotev } = useParams();
    const [noticia, setNoticia] = useState(null);
    const [noticiasAnteriores, setNoticiasAnteriores] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${APIHOST}/noticias/${idnotev}`);
          setNoticia(response.data);
  
          const ultimasNoticiasResponse = await axios.get(`${APIHOST}/noticias/ultimas-tres/${idnotev}`);
          const ultimasNoticias = ultimasNoticiasResponse.data;
  
          const noticiasImagens = ultimasNoticias.map((noticia) => ({
            idnotev: noticia.idnotev,
            imagem_notev: `${APIHOST}/${noticia.imagem_notev}`,
          }));
  
          setNoticiasAnteriores(noticiasImagens);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [idnotev]);
  
  
    // Verifica se a notícia está sendo carregada
    if (!noticia) {
      return <div>Carregando...</div>;
    }
    const linhas = noticia.descr_notev.split('.'); // Dividir o texto em linhas com base nos pontos finais

    const textoComQuebrasDeLinha = linhas.map((linha, index) => {
      return (
        <React.Fragment key={index}>
          {linha.trim()}. {/* Adicionar o ponto final na linha atual e manter visível */}
          <br /> {/* Adicionar primeira quebra de linha */}
          <br /> {/* Adicionar segunda quebra de linha */}
        </React.Fragment>
      );
    });
  
    return (
      <div className='pagina'>
        <div className='esquerda_pg'>
     {/* Este é um componente que contém links para as imagens de cada quadrado e o texto da notícia correspondente.*/}
    <Noticia
        NoticiasEventos={noticia.categoria_notev}
        noticia={`/${noticia.imagem_notev.replace('http://localhost:3001', '')}`} // Atualize esta linha
        strong="Mais Noticias"
        noticia01={
            noticiasAnteriores.length > 0 && noticiasAnteriores[0]
            ? { idnotev: noticiasAnteriores[0].idnotev, imagem_notev: `${noticiasAnteriores[0].imagem_notev.replace('http://localhost:3001', '')}` } // Atualize esta linha
            : null
        }
        noticia02={
            noticiasAnteriores.length > 1 && noticiasAnteriores[1]
            ? { idnotev: noticiasAnteriores[1].idnotev, imagem_notev: `${noticiasAnteriores[1].imagem_notev.replace('http://localhost:3001', '')}` } // Atualize esta linha
            : null
        }
        noticia03={
            noticiasAnteriores.length > 2 && noticiasAnteriores[2]
            ? { idnotev: noticiasAnteriores[2].idnotev, imagem_notev: `${noticiasAnteriores[2].imagem_notev.replace('http://localhost:3001', '')}` } // Atualize esta linha
            : null
        }
        titulo_noticia={noticia.titulo_notev}
        data_noticia={noticia.data_notev.slice(0, 10)}
        texto_noticia1={textoComQuebrasDeLinha}
    />



          
  
          <Footer
            developed="Developed by "
            by="HFA"
            copyright="© COPYRIGHT 2020 HFA / ALL RIGHTS RESERVED"
            termos="TERMOS & CONDIÇÕES"
            politica="POLÍTICA DE PRIVACIDADE"
            cookies="COOKIES "
          />
        </div>
  
        <div className='direita_pg' >
            <div className='barra_hora'>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Col_menu col_text_menu="MENU" />
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
                                    menu_logo="https://showroom.portugalbikevalue.pt/wp-content/uploads/2021/05/HFA-Logo-Dark.png"
                                    menu_titulo="ATENDIMENTO"
                                    menu_texto1="Para ser atendido, consoante a sua necessidade, escolha nos botões abaixo o departamento. "
                                    menu_texto2="Enquando aguarda, navegue pela nossa plataforma para saber mais sobre nós!"
                                    />
                        </Col>
                        <Col>
                            <Botao 
                                    botao_1="Recursos Humanos"
                                    botao_2="Compras"
                                    botao_3="Planeamento"
                                />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Footer_menu 
                                footer_btn1="Voltar"
                                footer_btn2="Página principal"

                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
      </div>
    );
  }
  


export default PaginaNoticia;