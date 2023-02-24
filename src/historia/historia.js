import { Component } from 'react';
import './historia.css';


class Menu extends Component{
    render() {
        return(
            <div className='direita'>
              <p>{this.props.menu}</p>
            </div>
        );
    }
}


class Img extends Component{
    render() {
        return(
            <div className='imgbarra'>
                <h1 className='ImgText'>RIGOR E EXCELÊNCIA DESDE 1995</h1>
            </div>
        );
    }
}


class Texto extends Component{
    render() {
        return(
            <div className='historia'>
                                    <p>A HFA-Henrique, Fernando & Alves, S.A. é uma PME, especializada na assemblagem e teste de equipamento eletrónico e de telecomunicações, em regime de subcontratação.
                    Fundada em 1995, o crescimento contínuo da empresa demonstra o seu compromisso em providenciar serviços de elevado valor acrescentado.
                    Os produtos são assemblados e testados de acordo com os requisitos dos Clientes. O processo produtivo é facilmente adaptável às necessidades de cada um, permitindo entregar um produto totalmente customizado. A empresa recorre a equipamentos inovadores, a tecnologias de alta precisão e rapidez, a técnicos qualificados e aposta na formação e treino especializado e constante dos seus colaboradores.</p>
                <img className='img' src="https://www.hfa.pt/storage/files/original/banner_noticias_5eb2851fc1bf8.jpg"  />
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

        </div>

        <Menu menu="MENU" />
 
    

     </div>
     
     
    );
  }

export default Historia;