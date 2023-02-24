import { Component } from 'react';
import './menu.css';


class Quadrado extends Component{
    render() {
        return(
            <div className='esquerda'>
                <div className='quadrado'>
                    <h2>{this.props.nome}</h2>
                </div>
            </div>
        );
    }
}


class QuadradoVIDEO extends Component{
    render() {
        return(
            <div className='esquerda-baixo'>
                <div className='quadradoVideo'>
                    <h2>{this.props.nome}</h2>
                </div>
            </div>
        );
    }
}


function Menu() {
    return (
     <div>

        <div className='esquerda'>
            <Quadrado nome="Noticias & Eventos"/>
            <Quadrado nome="Recrutamento"/>
            <Quadrado nome="Historia HFA"/>
            <Quadrado nome="Videos"/> 
        </div>

        <div className='esquerda-baixo'>
            <Quadrado nome="Videos"/> 
            <QuadradoVIDEO nome="Play"/> 
        </div>

        
     </div>
     
     
    );
  }

export default Menu;