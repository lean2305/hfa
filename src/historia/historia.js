import { Component } from 'react';
import './historia.css';
import { Container, Row, Col } from 'react-grid-system';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';


{/* Botão do menu direita */}
class Menu extends Component{
    render() {
        return(
            <div className='direita'>
              <p>{this.props.menu}</p>
            </div>
        );
    }
}


{/* Primeiro background com texto por cima */}
class Img extends Component{
    render() {
        return(
            <div className='img_fundo'>
                <h1 className='ImgText'>RIGOR E EXCELÊNCIA DESDE 1995</h1>
            </div>
        );
    }
}


{/* Componente contendo a historia da hfa com uma imagem de lado */}
class Texto extends Component{
    render() {
        return(
            <div className='historia'>
                                    <p className='texto_historia'>A HFA-Henrique, Fernando & Alves, S.A. é uma PME, especializada na assemblagem e teste de equipamento eletrónico e de telecomunicações, em regime de subcontratação.
                    Fundada em 1995, o crescimento contínuo da empresa demonstra o seu compromisso em providenciar serviços de elevado valor acrescentado.
                    <br /><br />Os produtos são assemblados e testados de acordo com os requisitos dos Clientes. O processo produtivo é facilmente adaptável às necessidades de cada um, permitindo entregar um produto totalmente customizado. A empresa recorre a equipamentos inovadores, a tecnologias de alta precisão e rapidez, a técnicos qualificados e aposta na formação e treino especializado e constante dos seus colaboradores.</p>
                <img className='img' src="https://www.hfa.pt/storage/files/original/banner_noticias_5eb2851fc1bf8.jpg"  />
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



{/*  */}

class Objetivo extends Component{
    render() {
        return(
            <div className='objetivo'>
                   <Container>
                    <Row>
                        <Col className='texto_objetivo'>
                            <h3>{this.props.visao01}</h3>
                            <h2>{this.props.visao}</h2>
                            <p>{this.props.visaoT}</p>
                        
                        </Col>
                        <Col className='texto_objetivo'>
                            <h3>{this.props.missao02}</h3>
                            <h2>{this.props.missao}</h2>
                            <p>{this.props.missaoT}</p>
                        
                        </Col>
                        <Col className='texto_objetivo'>
                            <h3>{this.props.valores03}</h3>
                            <h2>{this.props.valores}</h2>
                            <p>{this.props.valoresT}</p>
                        
                        </Col>
                    </Row>
                   </Container>
            </div>
        );
    }
}



function Historia() {
    return (

     <div className='pagina'>
       
        <div className='esquerda'>
           <Img />
           <Texto />
           <Objetivo visao01="01" visao="VISÃO" visaoT="Fazer da HFA uma referência a nivel mundial no setor da produção e teste de produtos de eletrónica" 
                    missao02="02" missao="MISSÃO" missaoT="Realizarde formasustentada, e com elevados padrões de qualidade, os produtos de eletrónica solicitados, sempre na vanguarda da tecnlogia."
                    valores03="03" valores="VALORES" valoresT="Qualidade; Know-How; Inovação; Flexibilidade; Dedicação; Confiança / Confidencialidade"/>

        </div>

        
        <div className='direita' >
            <div className='barra_hora'>
              
                <Container>
                    <Row>

                        <Col sm={4}>
                            <div>
                            
                                <svg className='svg_menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                                <p className='text_menu'>MENU</p>    
                               
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
                
            </div>          {/* className='barra_hora' */}

        </div>              {/* className='direita' */}

     </div>                 /* className='pagina' */
     
     
    );
  }

export default Historia;