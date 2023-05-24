import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import APIHOST from '../constant';

function PaginaNoticias() {
  const { idnotev } = useParams();
  const [noticia, setNoticia] = useState(null);
  
  useEffect(() => {
    // Faz a chamada à API para buscar os dados da notícia com o ID fornecido
    axios.get(`${APIHOST}/noticias/${idnotev}`)
      .then((response) => {
        setNoticia(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [idnotev]);

  // Verifica se a notícia está sendo carregada
  if (!noticia) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>ID da Notícia: {noticia.idnotev}</h1>
      <h2>Título: {noticia.titulo_notev}</h2>
      <p>Descrição: {noticia.descr_notev}</p>
      <p>Categoria: {noticia.categoria_notev}</p>
      <img src={process.env.PUBLIC_URL + '/' + noticia.imagem_notev} alt="Imagem da Notícia" />
    </div>
  );
}

export default PaginaNoticias;
