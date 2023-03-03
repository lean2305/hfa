import { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import './menu.css';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';

class Quad extends Component {
    render() {
        return(
            <div className={this.props.quadtype}>
                a
            </div>
        );
    }
}

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

function MenuInicial() {
    return (
     <div className='pagina'>
        <div className='esquerda'>
            <div className="container">
                <Container sm={12}>
                    <Row>
                        <Col sm={4}>
                            <Quad quadtype="um"/>
                        </Col>
                        <Col sm={4}>
                            <Quad quadtype="dois"/>
                        </Col>
                        <Col sm={4}> 
                            <Quad quadtype="tres"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Quad quadtype="um"/>
                        </Col>
                        <Col sm={8}>
                            <Quad quadtype="quatro"/>
                        </Col>
                    </Row> 
                </Container>
            </div>
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
                </Container>
            </div>
        </div>
     </div>
    );
  }


export default MenuInicial;