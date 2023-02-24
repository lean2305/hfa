import { Component } from 'react';
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';
import './noticias.css';



class Menu extends Component{
    render() {
        return(
            <div className='direita'>
              <p>{this.props.menu}</p>
            </div>
        );
    }
}


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
            <div>
               
              <h2 className='mais'>{this.props.nomemeio}</h2>
              
            </div>
        );
    }
}


class Noticia extends Component{
    render() {
        return(
            
            <div  >
               
               
            
                        <img className='imgbarra' src="https://greentumble.com/wp-content/uploads/2016/12/being-green.jpg"  />
                        
                        <p className='p'>{this.props.barra}</p>
                        <h4>PARTICIPAÇÃO FEIRA PRODUCTRÓNICA MUNIQUE</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply texxt. It has roots in a piece of classical Latin...</p>
                        <br /><p>15/02/2022</p> 
                       
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

            <Menu menu="MENU" />
 
    

     </div>
     
     
    );
  }


export default Noticias;