import { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './noticias.css';
import Clock from './clock';
import ExibirDataAtual from './date';
import React, { useState } from 'react';


{/* Maior div do lado esquerdo da página */}
class Quadrado extends Component{
    render() {
        return(
            
            <div>
                <div className='noticia'>
                    <div className='texto'>
                        <p  className='titulo'>{this.props.nome}</p>
                        <br />
                        <h3 className='titulo'>ADMINISTRATOR DA HFA É O NOVO EMBAIXADOR DA UA</h3>
                        <br /><br />
                        <p className='titulo'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...</p>
                        <br /><br /><p className='titulo'>15/02/2022</p> 
                    </div>
                        <div className='img'>
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
            <div className='mais_noticias'>
               
              <h2 className='mais'>{this.props.nomemeio}</h2>
              
            </div>
        );
    }
}

{/* Parte onde ficam as noticias */}
class Noticia extends Component{
    render() {
        return(
            
            <div className='div_noticia'>
                        <img className='imgbarra' src="https://greentumble.com/wp-content/uploads/2016/12/being-green.jpg"  />  
                        <div className='texto'>
                            <p className='p'>{this.props.barra}</p>
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
            <div className='footer'>
                <br />
                <p className='Text-footerr' style={{ color: "rgb(168, 168, 168)" }}>Developed by <a style={{ color: "white" ,fontWeight: "bold" }}>HFA</a></p>

                <div className='Copy'>
                    <p className='Text-footer' style={{ color: "rgb(168, 168, 168)" }}>© COPYRIGHT 2020 HFA / ALL RIGHTS RESERVED</p>
                    <p className='Text-footer'>TERMOS & CONDIÇÕES</p>
                    <p className='Text-footer'>POLÍTICA DE PRIVACIDADE</p>
                    <p className='Text-footer'>COOKIES </p>
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
            <div className='conteudo_menu'>
               <img className='imgbarra' src="https://showroom.portugalbikevalue.pt/wp-content/uploads/2021/05/HFA-Logo-Dark.png"  />  
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
            <div className='menu_botao'>
              
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
            <div className='footer_menu'>
                   <h1>Página principal</h1>
            </div>
        );
    }
}





{/* Exibição de todos os componentes */}
function Noticias() {
    const [display, setDisplay] = useState('flex');
    

  function handleClick() {
    setDisplay('none');
  }
    
    return (
     <div className='pagina'>
       
        <div className='esquerda'>
            <Quadrado nome="Noticia"/>
            <Mais nomemeio="MAIS NOTICIAS & EVENTOS" />
            
            <div className="container">
                
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
        
        <div className='direita' style={{ display: display }}>
            <div className='barra_hora'>
              
                <Container>
                    <Row>

                        <Col sm={4}>
                            <div>
                            <button onClick={handleClick} >
                                <svg className='svg_menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                                <p className='text_menu'>MENU</p>    
                                </button>
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