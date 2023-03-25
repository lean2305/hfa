import { Component } from "react";
import './menu.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MenuInicial from '../menu-inicial/menu'
import { Link } from 'react-router-dom';


class Conteudo_menu extends Component{
    render() {
        return( 
            <div className="menu">
                <div className="menu_texto">
                    <img className="menu_logo" src="https://www.hfa.pt/storage/company/grupo-78_2020-05-27-13-28-34.svg" />
                    
                    <Link to="/" style={{ textDecoration: 'none' }}> <h1 className="menu_h1">PÁGINA PRINCIPAL</h1></Link>
                    <Link to="/noticias" style={{ textDecoration: 'none' }}><h1 className="menu_h1">NOTICIAS & EVENTOS</h1></Link>
                    <Link to="/recursos-humanos" style={{ textDecoration: 'none' }}><h1 className="menu_h1">RECRUTAMENTO</h1></Link>
                    <Link to="/historia" style={{ textDecoration: 'none' }}><h1 className="menu_h1">HISTÓRIA HFA</h1></Link>
                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="menu_h1">VIDEOS</h1></Link>
                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="menu_h1">BACKOFFICE</h1></Link>
                </div>
            </div>
        );
    }
}





function Menu() {
    return (
     <div>
      <Conteudo_menu />
     </div>
    );
  }


export default Menu;