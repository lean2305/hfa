import { Component, useState } from "react";
import './dashboard.css';
import { Container, Row, Col } from 'react-grid-system';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Menu_esquerda extends Component{
    render() {
        return( 
            <div>
                
            </div>
        );
    }
}


class Menu_direita extends Component{
    render() {
        

        const handleChangeValues = value => {
            console.log(value.target.value);
            
        }
        return( 
            <div className="menu_direita">
               <div>
                <h1>Noticia & Evento</h1>
                <input type="text" name="name" placeholder="Nome" className="register--input" onChange={handleChangeValues} />
                <input type="number" name="cost" placeholder="Preço" className="register--input" />
                <input type="text" name="category" placeholder="categoria" className="register--input" />
                <button className="register--input">Inscrever</button>
               </div>
            </div>
        );
    }
}




function Dashboard() {
    return (
     <div className="dashboard">
        <div className="dasboard_esquerda">
            <Menu_esquerda />
        </div>

        <div className="dasboard_direita">
            <Menu_direita />
        </div>
     </div>
    );
  }


export default Dashboard;