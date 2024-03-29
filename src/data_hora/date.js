import React, { useState, useEffect } from 'react';
import './data_hora.css';

function ExibirDataAtual() {
  const [dataAtual, setDataAtual] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Obter a data atual
      const data = new Date();

      // Formatar a data para exibição
      const opcoesData = { weekday: 'long', day: 'numeric', month: 'long' };
      const dataFormatada = data.toLocaleDateString('pt-BR', opcoesData);

      // Atualizar a data atual no estado
      setDataAtual(dataFormatada);
    }, 1000); // Atualizar a cada segundo

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []); // Executar apenas uma vez ao montar o componente

  return (
    <div style={{ 
        position: "absolute",
        right: "4%",
        color: "#a5a5a5",
        top: "50%",
        fontSize: "1.2vh",
      }}>
        
      <h1>{dataAtual}</h1>
      
      <hr style={{
        border: "none",
        height: "3px",
        backgroundColor: "#a5a5a5",
        backgroundImage: "linear-gradient(to right, #a5a5a5 50%, transparent 50%)",
        backgroundPosition: "right"
      }} />

    </div>
  );
}

export default ExibirDataAtual;
