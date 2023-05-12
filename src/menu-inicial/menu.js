import { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import './menu.css';
import Clock from '../data_hora/clock';
import ExibirDataAtual from '../data_hora/date';
import { Link } from 'react-router-dom';


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


{/* Botões do menu direito */}
class Botao extends Component{
    handleButtonClick = (url) => {
        fetch(url, { method: 'GET' })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }
    render() {
        return( 
            <div className='menu_botao'>
              
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", fontSize: "2vh"}} onClick={() => this.handleButtonClick('http://192.168.226.83/start')}>{this.props.botao_1}</button>
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginLeft: "4%", fontSize: "2vh"}} onClick={() => this.handleButtonClick('http://192.168.226.83/start')}>{this.props.botao_2}</button>
                <br />
                <button style={{border: "2px solid #47555c",borderRadius: "4px",backgroundColor: "transparent",color: "#42525a",padding: "8px 16px",fontWeight: "bold",cursor: "pointer", marginTop: "4%", fontSize: "2vh"}} onClick={() => this.handleButtonClick('http://192.168.226.83/start')}>{this.props.botao_3}</button>
                
                
            </div>
        );
    }
}


class Quadrados extends Component{
    render() {
        return( 
            <div>
                
                <div className="quadrado_fila1_menu_inicial">
                    <div style={{backgroundImage:"url('https://img.freepik.com/fotos-gratis/mulher-de-negocio-que-trabalha-no-laptop_1388-91.jpg')"}} className="quadrado_menor_menu_inicial">
                    <Link to="/noticias" style={{ textDecoration: 'none' }}>    <svg className="svg_menu_inicial" fill="#ffffff" width="20%" height="20%" viewBox="-1 0 46 46" xmlns="http://www.w3.org/2000/svg"><path id="_14.News" data-name="14.News" d="M41,47H7a5,5,0,0,1-5-5V2A1,1,0,0,1,3,1H37a1,1,0,0,1,1,1h0V16h7a1,1,0,0,1,1,1V42A5,5,0,0,1,41,47Zm-5-5V3H4V42H4a3,3,0,0,0,3,3H37.022A4.962,4.962,0,0,1,36,42Zm8-24H38V42a3,3,0,0,0,6,0ZM7,40a1,1,0,0,1,1-1h9a1,1,0,0,1,0,2H8A1,1,0,0,1,7,40Zm4.666-16.285a.977.977,0,1,1-1.381-1.381l5.905-5.905a.887.887,0,0,1,.095-.143,1.047,1.047,0,0,1,1.43,0,.959.959,0,0,1,.095.143L22,20.619l2.19-2.19a.887.887,0,0,1,.095-.143.919.919,0,0,1,1.525.143l3.905,3.905a.977.977,0,1,1-1.381,1.381L25,20.381,23.381,22l.334.334a.977.977,0,1,1-1.381,1.381L17,18.381ZM23,29h9a1,1,0,0,1,0,2H23a1,1,0,0,1,0-2Zm0,5h9a1,1,0,0,1,0,2H23a1,1,0,0,1,0-2Zm0,5h9a1,1,0,0,1,0,2H23a1,1,0,0,1,0-2Zm1-23.5A1.5,1.5,0,1,1,22.5,14,1.5,1.5,0,0,1,24,15.5ZM27,10H13a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2ZM8,34h9a1,1,0,0,1,0,2H8a1,1,0,0,1,0-2Zm10-4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h9A1,1,0,0,1,18,30Z" transform="translate(-2 -1)" fill-rule="evenodd"/></svg>
                        <h1 className="quadrado_h1_menu_inicial">{this.props.quadrado_text_1}</h1>
                    </Link>
                    </div>

                   <div style={{backgroundImage:"url('https://img.freepik.com/fotos-gratis/trabalhando-no-laptop_1098-18083.jpg')"}} className="quadrado_menor_menu_inicial">
                   <Link to="/recursos-humanos" style={{ textDecoration: 'none' }}> 
                        <svg className="svg_menu_inicial" fill="#ffffff" width="20%" height="20%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M389.282 712.047l66.376 66.376c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963l-66.376-66.376c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963z"/><path d="M484.618 778.42l152.054-152.054c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0L455.655 749.457c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0zm170.742-581.3c0-80.593-65.327-145.92-145.92-145.92s-145.92 65.327-145.92 145.92c0 80.593 65.327 145.92 145.92 145.92s145.92-65.327 145.92-145.92zm40.96 0c0 103.215-83.665 186.88-186.88 186.88s-186.88-83.665-186.88-186.88c0-103.215 83.665-186.88 186.88-186.88s186.88 83.665 186.88 186.88z"/><path d="M691.2 991.015c16.849 0 30.72-13.871 30.72-30.72V569.127c0-101.329-82.991-184.32-184.32-184.32h-56.32c-101.329 0-184.32 82.991-184.32 184.32v391.168c0 16.849 13.871 30.72 30.72 30.72H691.2zm0 40.96H327.68c-39.471 0-71.68-32.209-71.68-71.68V569.127c0-123.951 101.329-225.28 225.28-225.28h56.32c123.951 0 225.28 101.329 225.28 225.28v391.168c0 39.471-32.209 71.68-71.68 71.68z"/></svg>
                        <h1 className="quadrado_h1_menu_inicial">{this.props.quadrado_text_2}</h1>
                    </Link>
                    </div>

                    <div style={{backgroundImage:"url('https://s1.static.brasilescola.uol.com.br/be/vestibular/notebook-ferramenta-trabalho-varios-profissionais-599844f1a665d.jpg')"}} className="quadrado_menor_menu_inicial">
                    <Link to="/historia" style={{ textDecoration: 'none' }}> 
                        <img className="svg_menu_inicial" width="20%" height="20%" src="https://www.hfa.pt/storage/company/grupo-78_2020-05-27-13-28-34.svg" alt="Logo" />
                        <h1 className="quadrado_h1_menu_inicial">{this.props.quadrado_text_3}</h1>
                    </Link>
                    </div>
                </div>

                <div className="quadrado_fila2_menu_inicial">
                    <div style={{backgroundImage:"url('https://s1.static.brasilescola.uol.com.br/be/vestibular/notebook-ferramenta-trabalho-varios-profissionais-599844f1a665d.jpg')"}} className="quadrado_menor_menu_inicial">
                    <Link to="/videos" style={{ textDecoration: 'none' }}> 
                        <svg className="svg_menu_inicial" width="20%" height="20%" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 6.79086 3.79086 5 6 5H13C15.2091 5 17 6.79086 17 9V9.07171L20.202 7.23108C21.0019 6.77121 22 7.34868 22 8.27144V15.7488C22 16.6203 21.1003 17.2012 20.306 16.8424L16.9855 15.3425C16.8118 17.3913 15.0938 19 13 19H6C3.79086 19 2 17.2091 2 15V9ZM17 13.1544L20 14.5096V9.65407L17 11.3786V13.1544ZM15 9C15 7.89543 14.1046 7 13 7H6C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H13C14.1046 17 15 16.1046 15 15V9Z" fill="#ffffff"/></svg>
                        <h1 className="quadrado_h1_menu_inicial">{this.props.quadrado_text_4}</h1>
                    </Link>
                    </div>
                    <div style={{backgroundImage:"url('https://img.freepik.com/fotos-gratis/mulher-de-negocio-que-trabalha-no-laptop_1388-91.jpg')"}} className="quadrado_maior_menu_inicial">
                    <video src={process.env.PUBLIC_URL + 'video/hfa.mp4'} autoPlay loop muted style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                </div>


                </div>
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
                <p className='text_menu'>{this.props.col_text_menu}</p>    
            </div>
        );
    }
}



function MenuInicial() {
    return (
     <div className='pagina_menu_inicial'>
        <div className='esquerda_menu_inicial'>
            <Quadrados 
                quadrado_text_1="Noticias & Eventos"
                quadrado_text_2="Recrutamento"
                quadrado_text_3="Historia HFA"
                quadrado_text_4="Videos"
            /> 
        </div>
        
        <div className='direita_menu_inicial' >
            <div className='barra_hora_menu_inicial'>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Col_menu col_text_menu="MENU" />
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
                </Container>
            </div>
        </div>
     </div>
    );
  }


export default MenuInicial;