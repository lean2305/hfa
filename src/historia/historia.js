import { Component } from 'react';
import './historia.css';
import { Container, Row, Col } from 'react-grid-system';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';
import { Link } from 'react-router-dom';


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
              
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", fontSize: "2vh"}}>Recursos Humanos</button>
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginLeft: "4%", fontSize: "2vh"}}>Compras</button>
                <br />
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginTop: "4%", fontSize: "2vh"}}>Planeamento</button>
                
                
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
    render() {
        return( 
            <div className='compromisso'>
                <div className='compromisso_esquerda'>
                    <div className='compromisso_fila1'>
                        <div className='compromisso_fila1_img'>
                            <img className='compromisso_img' src="https://www.hfa.pt/storage/files/original/CIT_IPCA610G_EN_2021_5ed660ba42913.png" alt="Minha imagem" />
                            <p className="compromisso_texto">CERTIFICADO IPC TRAINER - IPC-A-610G</p>
                        </div>
                        <div className='compromisso_fila1_img'>
                            <img className='compromisso_img' src="https://www.hfa.pt/storage/files/original/CIT_IPC771121C_EN_2021_5ed660fbdfd1c.png" alt="Minha imagem" />
                            <p className="compromisso_texto">CERTIFICADO IPC TRAINER - IPC-7711/7721</p>
                        </div>
                        <div className='compromisso_fila1_img'>
                            <img className='compromisso_img' src="https://www.hfa.pt/storage/files/original/HFAPGIpt_5ebacde586e1c.png" alt="Minha imagem" />
                            <p className="compromisso_texto">POLÍTICA INTEGRADA 2021</p>
                        </div>
                    </div>
                    <div className='compromisso_fila2'>
                        <div className='compromisso_div'>
                            <img className='compromisso_img2' src="https://www.hfa.pt/storage/files/original/ISO_9001_2015_623c4b7632e3a.png" alt="Minha imagem" />
                            <p className="compromisso_texto">CERTIFICADO IATF<br /> 16949:2016</p>
                        </div>
                        <div className='compromisso_div'>
                            <img className='compromisso_img2' src="https://www.hfa.pt/storage/files/original/ISO_9001_2015_623c4b7632e3a.png" alt="Minha imagem" />
                            <p className="compromisso_texto">CERTIFICADO NP EN ISO<br /> 9001: 2015</p>
                        </div>
                        
                    </div>
                </div>
                <div className='compromisso_direita'>
                    <p className='compromisso_direita_p'>Qualidade</p>
                    <h2 className='compromisso_direita_h2'>O COMPROMISSO DA HFA</h2>
                    <p className='compromisso_texto_p'><p style={{ color: '#0d344e' }}>“A HFA tem o seu sistema de gestão da Qualidade certificado pelos referenciais NP EN ISO 9001:2015 e IATF 16949:2016. O Sistema de gestão da qualidade da empresa é um dos pilares fundamentais para o sucesso da mesma”</p> A atual política de gestão integrada, definida pela administração, reflete a preocupação da empresa na definição e implementação de um conjunto de processos e metodologias, que asseguram elevando padrões de qualidade, eficiência e performance.<br /><br /> Neste sentido, todos assumem a responsabilidade de cumprir com o Sistema de Gestão da Qualidade, procurando permanentemente a otimização dos processos e recursos, enquanto fatores de melhoria contínua, e promover o desenvolvimento e a satisfação dos Colaboradores, levando em conta as diferentes aspirações sociais, económicas e ambientais.</p>
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
                    <h1>PARCERIAS HFA</h1>
                </div>

                
              <div class="ola row aos-init aos-animate" data-aos="fade-left">
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="50">
                    <img src="https://hfa.one/wp-content/uploads/2021/02/Uartronica-Logo-Dark-1024x347.png" width="160" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src="https://uploads-ssl.webflow.com/5fa309ec7a7638a3605f0b0c/5fa314a16dc9bd7596674ae6_logo-horizontal-no-slogan.svg" width="160px" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src="https://hfa.one/wp-content/uploads/2021/02/Globaltronic-Logo-Dark-1024x347.png" width="160px" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src="https://picadvanced.com/_next/static/images/PIC_logo_v3-29ea0d611901f4397dd8ae0b22bf6b62.png" width="160px" height="" border="0" alt="" />
                    </div>
                </div>
                <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <img src="https://odoocdn.com/web/image/res.partner/4984573/avatar_512/Inova-Ria:%20Associa%C3%A7%C3%A3o%20De%20Empresas%20Para%20Uma%20Rede%20De%20Inova%C3%A7%C3%A3o%20Em%20Aveiro?unique=748ac40" width="160" height="" border="0" alt="" />
                    </div>
                    </div>
                </div>

                <div class="ola row aos-init aos-animate" data-aos="fade-left">

                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src="https://odoocdn.com/web/image/res.partner/4984573/avatar_512/Inova-Ria:%20Associa%C3%A7%C3%A3o%20De%20Empresas%20Para%20Uma%20Rede%20De%20Inova%C3%A7%C3%A3o%20Em%20Aveiro?unique=748ac40" width="160" height="" border="0" alt="" />
                                </div>
                    </div>
                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src="https://www.it.pt/img/IT-30years-logo_01_website.png" width="160" height="" border="0" alt="" />
                                </div>
                    </div>
                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src="https://storage-prtl-co.imgix.net/endor/organisations/772/logos/1547652569_logo_UA.png" width="160" height="" border="0" alt="" />
                                </div>
                    </div>
                    <div style={{ paddingRight: '4%' }} class="col-lg-2 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                    <img src="https://gbtembedded.com/assets/img/navbar-logo.png" width="160" height="" border="0" alt="" />
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
                    <p style={{color :'#022d4b', fontWeight:'bold', fontSize: '2.2vh'}}>Ética e responsabilidade social</p>
                    <h1 style={{color :'#3ba5dd', fontWeight:'bold', fontSize:'4.4vh'}}>PARTE INTEGRANTE DO ADN DA HFA</h1>
                    <p className='integrante_p'>Acreditamos, que juntos, Empresários, Funcionários, Clientes, Fornecedores (Critérios de Monitorização), Acionistas, Autoridades governamentais e Comunidade em geral, podemos colaborar com as exigências do mundo atual, dedicando especial atenção aos princípios e à ética nos negócios, às relações com os empregados, aos direitos humanos, â gestão ambiental, à relação com a comunidade e às condições gerais de trabalho, tanto dentro da HFA, como na relação com a da cadeia produtiva.
                    <br /><br /> Temos a noção clara de que o desenvolvimento dos negócios nos dias de hoje deve pautar-se no respeito à integridade ecológica, na justiça social e económica, na democracia, na não-violência e na paz.
                    </p>

                </div>

                <div  className='integrante_direita'>
                    <div className='integrante_direita_border'>
                        <img width="300" height="300" src='https://www.hfa.pt/storage/files/original/estica_responsabilidade_5ebbc6a26a684.jpg' />
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



function Historia() {
    return (

     <div className='pagina'>
       
        <div className='esquerda'>
           <Img />
           <Texto />
           <Objetivo visao01="01" visao="VISÃO" visaoT="Fazer da HFA uma referência a nivel mundial no setor da produção e teste de produtos de eletrónica" 
                    missao02="02" missao="MISSÃO" missaoT="Realizarde formasustentada, e com elevados padrões de qualidade, os produtos de eletrónica solicitados, sempre na vanguarda da tecnlogia."
                    valores03="03" valores="VALORES" valoresT="Qualidade; Know-How; Inovação; Flexibilidade; Dedicação; Confiança / Confidencialidade"/>
            <Compromisso />
            <Parceria />
            <Integrante />
            <Footer />
        </div>

        
        <div className='direita' >
            <div className='barra_hora'>
              
                <Container>
                    <Row>

                        <Col sm={4}>
                            <div>
                            <Link to="/menu" style={{ textDecoration: 'none' }}>
                                <svg className='svg_menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                            </Link>
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