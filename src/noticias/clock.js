import React, { useState, useEffect } from 'react';
import './noticias.css';

function Clock() {
  const [horaAtual, setHoraAtual] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Obter a hora atual
      const data = new Date();
      const hora = data.getHours();
      const minutos = data.getMinutes();

      // Formatar a hora para exibição
      const horaFormatada = `${hora}h${minutos.toString().padStart(2, "0")}`;

      // Atualizar a hora atual no estado
      setHoraAtual(horaFormatada);
    }, 1000); // Atualizar a cada segundo

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []); // Executar apenas uma vez ao montar o componente

  return (
    <div style={{ 
        position: "absolute",
        top: "-50%",
        right: "-100%",
        fontSize: "1vw",
        padding: "1vw"
      }}>
        
      <h1 className='Text_clock'>{horaAtual}</h1>
    </div>
  );
}

export default Clock;
