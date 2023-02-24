import { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './noticias.css';
import Clock from './clock';
import ExibirDataAtual from './date';




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


class Mais extends Component{
    render() {
        return(
            <div className='mais_noticias'>
               
              <h2 className='mais'>{this.props.nomemeio}</h2>
              
            </div>
        );
    }
}


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


class Hora extends Component{
    render() {
        return(
            <div className='barra_hora'>
              
                <Container>
                    <Row>

                        <Col sm={4}>
                            <svg className='svg_menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                            <p className='text_menu'>{this.props.menu}</p>
                        </Col>

                        <Col sm={4}>
                            <Clock></Clock>
                        </Col>
                        
                        <ExibirDataAtual></ExibirDataAtual>
                        

                    </Row>
                </Container>
            </div>
        );
    }
}





function Noticias() {
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
                    </Row>
                    <Row>
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
        
        <div className='direita'>

            <Hora menu="MENU" />

        </div>
            
 
    

     </div>
     
     
    );
  }


export default Noticias;