import React, { useState } from 'react';
import './dashboard.css';

function Contador() {
  return (
    <div>

    </div>
  );
}

function Menu_esquerda() {
  const [showMenu, setShowMenu] = useState(false); // Armazena a visibilidade do menu no estado

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <h3 className='titulo_esquerda'>Página inicial</h3>
      <div className='menu:esquerda'>
        <h3 className='link-name' href='#' onClick={toggleMenu}>Notícias</h3>
        {showMenu &&
          <ul className='sub-menu'>
            <li><a href='#'>Web Design</a></li>
            <li><a href='#'>Login Form</a></li>
            <li><a href='#'>Card Design</a></li>
          </ul>
        }
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <div className='dashboard_esquerda'>
        <Menu_esquerda />
      </div>

      <div className='dashboard_direita'>
        <Contador />
      </div>
    </div>
  );
}

export default Dashboard;