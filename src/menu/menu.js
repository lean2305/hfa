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
                    
                    <Link to="/" style={{ textDecoration: 'none' }}> <h1 className="menu_h1">{this.props.btn_text1}</h1></Link>
                    <Link to="/noticias" style={{ textDecoration: 'none' }}><h1 className="menu_h1">{this.props.btn_text2}</h1></Link>
                    <Link to="/recursos-humanos" style={{ textDecoration: 'none' }}><h1 className="menu_h1">{this.props.btn_text3}</h1></Link>
                    <Link to="/historia" style={{ textDecoration: 'none' }}><h1 className="menu_h1">{this.props.btn_text4}</h1></Link>
                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="menu_h1">{this.props.btn_text5}</h1></Link>
                    <Link to="/login" style={{ textDecoration: 'none' }}><h1 className="menu_h1">{this.props.btn_text6}</h1></Link>
                </div>
            </div>
        );
    }
}





function Menu() {
    return (
     <div>
      <Conteudo_menu 
        btn_text1="PÁGINA PRINCIPAL"
        btn_text2="NOTICIAS & EVENTOS"
        btn_text3="RECRUTAMENTO"
        btn_text4="HISTÓRIA HFA"
        btn_text5="VIDEOS"
        btn_text6="BACKOFFICE"
      />
     </div>
    );
  }


export default Menu;