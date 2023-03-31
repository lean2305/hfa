import { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './noticias.css';
import Clock from './clock';
import ExibirDataAtual from './date';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

{/* Maior div do lado esquerdo da página */}
class Quadrado extends Component{
    render() {
        return(
            
            <div>
                <div className='noticia_menu_noticia'>
                    <div className='texto_menu_noticia'>
                        <p  className='titulo_menu_noticia'>{this.props.nome}</p>
                        <br />
                        <h3 className='titulo_menu_noticia'>ADMINISTRATOR DA HFA É O NOVO EMBAIXADOR DA UA</h3>
                        <br /><br />
                        <p className='titulo_menu_noticia'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...</p>
                        <br /><br /><p className='titulo_menu_noticia'>15/02/2022</p> 
                    </div>
                        <div className='img_menu_noticia'>
                            <img src="https://www.pulnet.com.br/uploads/img/servicos/16/thumb-840-370/3fea4195859a7cc9e862be43c2d5970e.jpg"  />
                        </div>       
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

{/* Parte onde ficam as noticias */}
class Noticia extends Component{
    render() {
        return(
            
            <div className='div_noticia_menu_noticia'>
                        <img className='imgbarra_menu_noticia' src="https://greentumble.com/wp-content/uploads/2016/12/being-green.jpg"  />  
                        <div className='texto_menu_noticia'>
                            <p className='p_menu_noticia'>{this.props.barra}</p>
                            <h4>PARTICIPAÇÃO FEIRA PRODUCTRÓNICA MUNIQUE</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply texxt. It has roots in a piece of classical Latin...</p>
                            <br /><p>15/02/2022</p> 
                        </div>
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
                <p className='Text-footerr_menu_noticia' style={{ color: "rgb(168, 168, 168)" }}>Developed by <a style={{ color: "white" ,fontWeight: "bold" }}>HFA</a></p>

                <div className='Copy_menu_noticia'>
                    <p className='Text-footer_menu_noticia' style={{ color: "rgb(168, 168, 168)" }}>© COPYRIGHT 2020 HFA / ALL RIGHTS RESERVED</p>
                    <p className='Text-footer_menu_noticia'>TERMOS & CONDIÇÕES</p>
                    <p className='Text-footer_menu_noticia'>POLÍTICA DE PRIVACIDADE</p>
                    <p className='Text-footer_menu_noticia'>COOKIES </p>
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
               <img className='imgbarra_menu_noticia' src="https://showroom.portugalbikevalue.pt/wp-content/uploads/2021/05/HFA-Logo-Dark.png"  />  
                <h1 style={{color: "#072d49", fontFamily : "'Titillium Web', sans-serif", fontSize: "4vh"}}>ATENDIMENTO</h1>
                <p style={{ color: "#47555c",marginLeft : "5%", marginRight: "5%", fontSize: "2.3vh"}}>Para ser atendido, consoante a sua necessidade, escolha nos botões abaixo o departamento. <br />Enquando aguarda, navegue pela nossa plataforma para saber mais sobre nós!</p>       
            </div>
        );
    }
}


{/* Botões do menu direito */}
class Botao extends Component{
    render() {
        return( 
            <div className='menu_botao_menu_noticia'>
              
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", fontSize: "2vh"}}>Recursos Humanos</button>
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginLeft: "4%", fontSize: "2vh"}}>Compras</button>
                <br />
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginTop: "4%", fontSize: "2vh"}}>Planeamento</button>
                
                
            </div>
        );
    }
}



{/* Rodapé do menu direito */}

class Footer_menu extends Component{
    render() {
        return(
            <Link to="/" style={{ textDecoration: 'none' }}> 
            <div className='footer_menu_menu_noticia'>
                
                   <h1>Página principal</h1>
                
            </div>
            </Link>
        );
    }
}





{/* Exibição de todos os componentes */}
function Noticias() {
    
    
    return (
     <div className='pagina_menu_noticia'>
       
        <div className='esquerda_menu_noticia'>
            <Quadrado nome="Noticia"/>
            <Mais nomemeio="MAIS NOTICIAS & EVENTOS" />
            
            <div className="container_menu_noticia">
                
            <Container>
                    <Row>
                        <Col sm={4}>
                            <Noticia barra="Eventos" />
                        </Col>

                        <Col sm={4}>
                            <Noticia barra="Eventos" />
                        </Col>

                        <Col sm={4}>
                            <Noticia barra="Eventos" />
                        </Col>
                        <Col sm={4}>
                            <Noticia barra="Eventos" />
                        </Col>

                        <Col sm={4}>
                            <Noticia barra="Eventos" />
                        </Col>
                    </Row>
                    
                </Container>
            
            </div>
           
           <Footer />

        </div>
        
        <div className='direita_menu_noticia' >
            <div className='barra_hora_menu_noticia'>
              
                <Container>
                    <Row>

                        <Col sm={4}>
                            <div>
                            <Link to="/menu" style={{ textDecoration: 'none' }}> 
                                <svg className='svg_menu_menu_noticia' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                            </Link>
                                <p className='text_menu_menu_noticia'>MENU</p>    
                            </div>
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
                            <Conteudo_menu />
                        </Col>

                        <Col>
                            <Botao />
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <Footer_menu />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        </div>
     </div>
    );
  }


export default Noticias;