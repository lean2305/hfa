import { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import './pagina_noticia.css';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';




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


class Noticia extends Component{
    render() {
        return( 
            <div className="noticia">
                <div className="noticia_esquerda_img">
                    <img style={{paddingBottom :'4%'}} className="svg" width="100%" height="40%" src={this.props.noticia} alt="Logo" />
                    <strong className="noticia_strong">{this.props.strong}</strong> <br /> <br />
                    <div className="mais_noticias">
                        <img style={{paddingBottom :'4%', paddingRight: '5%'}} className="svg" width="30%" height="100vh" src={this.props.noticia01} alt="Logo" />
                        <img style={{paddingBottom :'4%', paddingRight: '5%'}} className="svg" width="30%" height="100vh" src={this.props.noticia02} alt="Logo" />
                        <img style={{paddingBottom :'4%', paddingRight: '5%'}} className="svg" width="30%" height="100vh" src={this.props.noticia02} alt="Logo" />
                    
                    </div>
                </div>

                <div className="noticia_direita">
                    <strong className="noticia_strong">Noticias & Eventos</strong>
                    <h1>{this.props.titulo_noticia}</h1>
                    <p style={{color:'rgb(165, 165, 165)'}}>{this.props.data_noticia}</p>
                    <hr style={{border:'none', height:'3px', backgroundColor:'rgb(165, 165, 165)'}}/>
                    <p style={{color:'#636363'}}>{this.props.texto_noticia}</p>

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

class Footer_menu extends Component{
    render() {
        return(
            <div className='footer_menu_wrapper'>
                <div className='footer_menu'>
                    <div className='button_wrapper'>
                        <div style={{backgroundColor: '#63b8e3'}} className='button'>
                            <h2 style={{fontSize: '3vh'}}>Voltar</h2>
                        </div>
                    </div>
                    <div className='button_wrapper'>
                        <div className='button'>
                            <h2 style={{fontSize: '3vh'}}>Página principal</h2>
                        </div>
                    </div>
                </div>
            </div>

          
        );
    }
}


function PaginaNoticia() {
    return (
     <div className='pagina'>
        <div className='esquerda'>

            {/* Este é um componente que contém links para as imagens de cada quadrado e o texto da notícia correspondente.*/}
            <Noticia noticia="https://www.platon.com.br/wp-content/uploads/2019/10/datacenter1-1200x480.jpg" 
                strong="Mais Noticias"
                noticia01="https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/61607d840cf241cadce2057c/1024.jpg"
                noticia02="https://img.freepik.com/fotos-gratis/empresario-assinar-papeis-no-escritorio_23-2148377770.jpg?w=2000"
                noticia03="https://images.rr.sapo.pt/advogado_homem_de_negocios_pessoa_gravata_foto_hunters_race_408744_unsplash1536897bdefaultlarge_1024.jpg"
                titulo_noticia="Participação Feira Productrónica Munique"
                data_noticia="15/02/2022"
                texto_noticia="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Loren ipsum is that it has a more-or-less normal distribution.<br /><br/>of letters, as apposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editor<br /> <br />now use Lorem Ipsum as their defautl model text, and a search for lorem ipsum will uncover many web sites still in "
            
            /> 
                
           <Footer />
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
            </div>
        </div>
     </div>
    );
  }


export default PaginaNoticia;