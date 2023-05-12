import { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import './recursos-humanos.css';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';
import { Link } from 'react-router-dom';




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

class Faça_parte extends Component{
    render() {
        return(
            <div className='quadrado'>
                <div className="quadrado_texto">
                    <p className="quadrado_p">RECURSOS HUMANOS</p>
                    <h2 className="quadrado_h1">FAÇA PARTE DA NOSSA EQUIPA</h2>
                </div>
            </div>
        );
    }
}


class Texto extends Component{
    render() {
        return(
            <div className="texto">
                <div className="texto_esquerda">
                    <p>O ADN da HFA,SA baseia-se em três pilares essenciais, qualidade, inovação e excelência. Tendo estes indicadores como base procuramos recrutar pessoas formadas e qualificadas de modo a garantir a máxima qualidade no produto.</p>
                    <p>Colaboradores altamente treinados e motivados são fundamentais para o sucesso continuado e podemos afirmar que o desempenho da nossa força de trabalho continua a diferenciar o nosso negócio dentro de um mercado competitivo.</p>
                
                </div>
                <div className="texto_direita">
                    <p>A HFA,SA incentiva continuadamente os seus funcionários a adquirirem novas competências e qualificações, a fim de responder às constantes mudanças de necessidades do negócio, bem como manter a sua própria empregabilidade.</p>
                    <p>A HFA,SA está empenhada em maximizar o potencial de todos os colaboradores, através de formação qualificada e programas de desenvolvimento, incluindo o suporte para qualificações profissionais específicas que respondam às necessidades e aspirações dos colaboradores e do negócio.</p>
                </div>
            </div>
        );
    }
}



class Aviso extends Component{
    render() {
        return(
            <div className="aviso">
                <img className="aviso_img"  src="https://static.vecteezy.com/system/resources/previews/017/172/377/original/warning-message-concept-represented-by-exclamation-mark-icon-exclamation-symbol-in-triangle-png.png" />
                <div className="aviso_texto">
                    <h1 className="aviso_h1">Para ficha de inscrição por favor contacte:</h1>
                </div>
            </div>
        );
    }
}


class Constante_Kelly extends Component{
    render() {
        return(
            <div className="contacto">
                <div className="contacto_esquerda">
                    <div className="contacto_logo">
                        <img className="contacto_img_esquerda" src="https://www.portugalespanha.org/images/Grupo_Constant_H.png" />
                    </div>
                    <div className="contacto_texto">
                        <p className="contacto_p">E-mail:<a> recrutamentoagueda@grupoconstant.com</a></p>
                        <p className="contacto_p">Telefone:<a> 910 954 500</a></p>
                        <p className="contacto_p">Morada:<a> Rua José Sucena nº61, 3750.157 Águeda</a></p>
                    </div>
                </div>

                <div className="contacto_direita">
                    <div className="contacto_logo">
                        <img className="contacto_img_direita" src="https://www.jobsexpo.ie/wp-content/uploads/2022/09/Kelly-services-logo.jpg" />
                    </div>
                    <div className="contacto_texto">
                        <p className="contacto_p">E-mail:<a> patricia.amaral@kellyservices.pt</a></p>
                        <p className="contacto_p">Telefone:<a> 930 500 131</a></p>
                        <p className="contacto_p">Morada:<a> Largos Nossa Senhora da Alegria 27, 3800-369 Aveiro</a></p>
                    </div>
                </div>
                
            </div>
        );
    }
}







function RecursosHumanos() {
    return (
     <div className='pagina'>
        <div className='esquerda'>
            <Faça_parte />
            <Texto />
            <Aviso />
            <Constante_Kelly />
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
                 
                </Container>
            </div>
        </div>
     </div>
    );
  }


export default RecursosHumanos;