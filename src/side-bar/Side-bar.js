import { Component } from 'react';
import './side-bar.css';


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


function Sidebar() {
    return (
     <div>

     </div>
     
     
    );
  }

export default Sidebar;