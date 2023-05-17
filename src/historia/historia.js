import { Component } from 'react';
import './historia.css';
import { Container, Row, Col } from 'react-grid-system';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';
import { Link } from 'react-router-dom';
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Html from '../html_parcerias';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                <h1 className='ImgText'>{this.props.img_titulo}</h1>
            </div>
        );
    }
}


{/* Componente contendo a historia da hfa com uma imagem de lado */}
class Texto extends Component{
    render() {
        return(
            <div className='historia'>
                <p className='texto_historia'><p>{this.props.texto_texto_historia1}
                </p><p>{this.props.integrante_texto2}</p></p>
                <img className='img' src={this.props.integrante_img}  />
            </div>
        );
    }
}


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

{/* Rodapé do menu direito */}

class Footer_menu extends Component{
    render() {
        return(
            <Link to="/" style={{ textDecoration: 'none' }}> 
            <div className='footer_menu'>
                <h1>{this.props.btn_pagina_principal}</h1>
            </div>
            </Link> 
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



{/* Objetivo da hfa */}

class Objetivo extends Component{
    render() {
        return(
            <div className='objetivo'>
                <div className='objetivo_conteudo'>
                   <Container>
                    <Row>
                        <Col className='texto_objetivo'>
                            <h3 className='no-center'>{this.props.visao01}</h3>
                            <h2 className='no-center'>{this.props.visao}</h2>
                            <p className='obetivo_p'>{this.props.visaoT}</p>
                        
                        </Col>
                        <Col className='texto_objetivo'>
                            <h3 className='no-center'>{this.props.missao02}</h3>
                            <h2 className='no-center'>{this.props.missao}</h2>
                            <p className='obetivo_p'>{this.props.missaoT}</p>
                        
                        </Col>
                        <Col className='texto_objetivo'>
                            <h3 className='no-center'>{this.props.valores03}</h3>
                            <h2 className='no-center'>{this.props.valores}</h2>
                            <p className='obetivo_p'>{this.props.valoresT}</p>
                        
                        </Col>
                    </Row>
                   </Container>
                </div>
            </div>
        );
    }
}





{/* Compromisso da hfa */}
class Compromisso extends Component{
    constructor(props) {
        super(props);
    
        this.images = [
          // Atualize o array de imagens para incluir texto
          { url: 'https://www.hfa.pt/storage/files/original/CIT_IPCA610G_EN_2021_5ed660ba42913.png?text=Imagem+1', text: 'CERTIFICADO IPC TRAINER - IPC-A-610G' },
          { url: 'https://www.hfa.pt/storage/files/original/CIT_IPC771121C_EN_2021_5ed660fbdfd1c.png?text=Imagem+2', text: 'CERTIFICADO IPC TRAINER - IPC-7711/7721' },
          { url: 'https://www.hfa.pt/storage/files/original/HFAPGIpt_5ebacde586e1c.png?text=Imagem+3', text: 'POLÍTICA INTEGRADA 2021' },
          { url: 'https://www.hfa.pt/storage/files/original/ISO_9001_2015_623c4b7632e3a.png?text=Imagem+4', text: 'CERTIFICADO IATF 16949:2016' },
          { url: 'https://www.hfa.pt/storage/files/original/ISO_9001_2015_623c4b7632e3a.png?text=Imagem+5', text: 'CERTIFICADO NP EN ISO 9001: 2015' },
        ];
    
        this.settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false
        };
    
        this.carouselContainerStyle = {
          width: '60%',
          margin: '0 auto'
        };
    
        this.carouselImageStyle = {
          width: '100%',
          height: 'auto'
        };
      }
    
    render() {
        return( 
            <div className='compromisso'>
                <div className='compromisso_esquerda'>
                    <div style={this.carouselContainerStyle}>
                        <Slider {...this.settings}>
                        {this.images.map((image, index) => (
                            <div key={index}>
                            <img style={this.carouselImageStyle} src={image.url} alt={`Imagem ${index + 1}`} />
                            <p style={{ textAlign: 'center',maxWidth : '50%' , paddingLeft :'26%'}}>{image.text}</p> {/* Renderize o texto abaixo da imagem */}
                            </div>
                        ))}
                        </Slider>
                    </div>
                </div>
                <div className='compromisso_direita'>
                    <p className='compromisso_direita_p'>{this.props.compromisso_qualidade}</p>
                    <h2 className='compromisso_direita_h2'>{this.props.compromisso_titulo}</h2>
                    <p className='compromisso_texto_p'><p style={{ color: '#0d344e' }}>{this.props.compromisso_texto1}</p>{this.props.compromisso_texto2}</p><p>{this.props.compromisso_texto3}</p>
                </div>
            </div>
        );
    }
}

{/* Componente das parcerias da hfa */}
class Parceria extends Component{
    render() {
        return(
            <div>

                <div className='parceria_titulo'>
                    <h1>{this.props.parceria_titulo}</h1>
                </div>

                
              <div class="ola row aos-init aos-animate" data-aos="fade-left">
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="50">
                    <img src={this.props.parceria_img_1} width="160" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src={this.props.parceria_img_2} width="160px" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src={this.props.parceria_img_3} width="160px" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src={this.props.parceria_img_4} width="160px" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src={this.props.parceria_img_5} width="160" height="" border="0" alt="" />
                    </div>
                    </div>
                </div>

                <div class="ola row aos-init aos-animate" data-aos="fade-left">

                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src={this.props.parceria_img_6} width="160" height="" border="0" alt="" />
                                </div>
                    </div>
                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src={this.props.parceria_img_7} width="160" height="" border="0" alt="" />
                                </div>
                    </div>
                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src={this.props.parceria_img_8} width="160" height="" border="0" alt="" />
                                </div>
                    </div>
                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src={this.props.parceria_img_9} width="160" height="" border="0" alt="" />
                                </div>
                    </div>

                </div>
            
            </div>
        );
    }
}


{/* Componente integrante*/}
class Integrante extends Component{
    render() {
        return(
            <div className='integrante'>
                <div className='integrante_esquerda'>
                    <p style={{color :'#022d4b', fontWeight:'bold', fontSize: '2.2vh'}}>{this.props.integrante_subtitulo}</p>
                    <h1 style={{color :'#3ba5dd', fontWeight:'bold', fontSize:'4.4vh'}}>{this.props.integrante_titulo}</h1>
                    <p className='integrante_p'><p>{this.props.integrante_texto1}
                    </p><p>{this.props.integrante_texto2}</p> 
                    </p>

                </div>

                <div  className='integrante_direita'>
                    <div className='integrante_direita_border'>
                        <img className='integrante_img' width="300" height="300"  src={this.props.integrante_img} />
                    </div>
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

class Col_menu extends Component{
    render() {
        return(
            <div>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                    <svg className='svg_menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </Link>
                <p className='text_menu'>{this.props.svg_menu}</p>    
            </div>
        );
    }
}







function Historia() {

    return (

     <div className='pagina'>
       
        <div className='esquerda'>
            <Img 
                img_titulo="RIGOR E EXCELÊNCIA DESDE 1995"
                
            />

            <Texto 
                texto_texto_historia1="A HFA-Henrique, Fernando & Alves, S.A. é uma PME, especializada na assemblagem e teste de equipamento eletrónico e de telecomunicações, em regime de subcontratação.
                Fundada em 1995, o crescimento contínuo da empresa demonstra o seu compromisso em providenciar serviços de elevado valor acrescentado"
                integrante_texto2="Os produtos são assemblados e testados de acordo com os requisitos dos Clientes. O processo produtivo é facilmente adaptável às necessidades de cada um, permitindo entregar um produto totalmente customizado. A empresa recorre a equipamentos inovadores, a tecnologias de alta precisão e rapidez, a técnicos qualificados e aposta na formação e treino especializado e constante dos seus colaboradores."
                integrante_img="https://www.hfa.pt/storage/files/original/banner_noticias_5eb2851fc1bf8.jpg"

            />
           <Objetivo 
                    visao01="01" visao="VISÃO" visaoT="Fazer da HFA uma referência a nivel mundial no setor da produção e teste de produtos de eletrónica" 
                    missao02="02" missao="MISSÃO" missaoT="Realizarde formasustentada, e com elevados padrões de qualidade, os produtos de eletrónica solicitados, sempre na vanguarda da tecnlogia."
                    valores03="03" valores="VALORES" valoresT="Qualidade; Know-How; Inovação; Flexibilidade; Dedicação; Confiança / Confidencialidade"/>
            
            <Compromisso 
                certificado_img_610G="https://www.hfa.pt/storage/files/original/CIT_IPCA610G_EN_2021_5ed660ba42913.png" 
                certificado_texto_G10G="CERTIFICADO IPC TRAINER - IPC-A-610G~"
                certificado_img_7711 ="https://www.hfa.pt/storage/files/original/CIT_IPC771121C_EN_2021_5ed660fbdfd1c.png"
                certificado_texto_7711="CERTIFICADO IPC TRAINER - IPC-7711/7721"
                certificado_img_politica2021="https://www.hfa.pt/storage/files/original/HFAPGIpt_5ebacde586e1c.png"
                certificado_texto_politica2021="POLÍTICA INTEGRADA 2021"
                certificado_img_iatf="https://www.hfa.pt/storage/files/original/ISO_9001_2015_623c4b7632e3a.png"
                certificado_texto_iatf="CERTIFICADO IATF 16949:2016"
                certificado_img_iso2015="https://www.hfa.pt/storage/files/original/ISO_9001_2015_623c4b7632e3a.png"
                certificado_texto_iso2015="CERTIFICADO NP EN ISO 9001: 2015"
                compromisso_qualidade="Qualidade"
                compromisso_titulo="O COMPROMISSO DA HFA"
                compromisso_texto1="“A HFA tem o seu sistema de gestão da Qualidade certificado pelos referenciais NP EN ISO 9001:2015 e IATF 16949:2016. O Sistema de gestão da qualidade da empresa é um dos pilares fundamentais para o sucesso da mesma”"
                compromisso_texto2=" A atual política de gestão integrada, definida pela administração, reflete a preocupação da empresa na definição e implementação de um conjunto de processos e metodologias, que asseguram elevando padrões de qualidade, eficiência e performance."
                compromisso_texto3="Neste sentido, todos assumem a responsabilidade de cumprir com o Sistema de Gestão da Qualidade, procurando permanentemente a otimização dos processos e recursos, enquanto fatores de melhoria contínua, e promover o desenvolvimento e a satisfação dos Colaboradores, levando em conta as diferentes aspirações sociais, económicas e ambientais."
                />
            <div style={{ height: '50vh' }}>
            <Html />
            </div>
            <Integrante 
                integrante_subtitulo="Ética e responsabilidade social"
                integrante_titulo="PARTE INTEGRANTE DO ADN DA HFA"
                integrante_texto1="Acreditamos, que juntos, Empresários, Funcionários, Clientes, Fornecedores (Critérios de Monitorização), Acionistas, Autoridades governamentais e Comunidade em geral, podemos colaborar com as exigências do mundo atual, dedicando especial atenção aos princípios e à ética nos negócios, às relações com os empregados, aos direitos humanos, â gestão ambiental, à relação com a comunidade e às condições gerais de trabalho, tanto dentro da HFA, como na relação com a da cadeia produtiva."
                integrante_texto2="Temos a noção clara de que o desenvolvimento dos negócios nos dias de hoje deve pautar-se no respeito à integridade ecológica, na justiça social e económica, na democracia, na não-violência e na paz."
                integrante_img='https://www.hfa.pt/storage/files/original/estica_responsabilidade_5ebbc6a26a684.jpg'
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

        
        <div className='direita' >
            <div className='barra_hora'>
              
                <Container>
                    <Row>

                        <Col sm={4}>
                           
                            <Col_menu svg_menu="MENU" />
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
                            <Footer_menu btn_pagina_principal="Página Principal" />
                        </Col>
                    </Row>
                </Container>
                
            </div>          {/* className='barra_hora' */}

        </div>              {/* className='direita' */}

     </div>                 /* className='pagina' */
     
     
    );
  }

export default Historia;