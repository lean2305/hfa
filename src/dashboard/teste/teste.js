import React, { useState,useEffect } from 'react';
import axios from 'axios';


function Dashboard_conteudo() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      return () => clearInterval(timerId);
    }, []);
  
    const handleImageChange = (event) => {
      setSelectedImage(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('image', selectedImage);
      
  
      axios.post("http://localhost:3001/upload", formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
        
    };

    
     
    return (
        <div>
            <h1>Dashboard</h1>
            <form onSubmit={handleSubmit} >
                <input type="file" name="imagem" onChange={handleImageChange} /><br/>
                <input type="text" name="titulo" placeholder='Titulo' />
                <input type="text" name="descricao" placeholder='Descrição' />
                <select name="categoria" id="tipo">
                    <option name="categoria" value="evento">Evento</option>
                    <option name="categoria" value="noticias">Notícias</option>
                </select>
                <input type="date" name='data' defaultValue={currentDate.toISOString().slice(0, 10)} placeholder="Titulo" />

                <button type="submit">Upload</button>
            </form>
        </div>
    );
  }
  




function Teste() {
  return (
    <div>
        <Dashboard_conteudo />
    </div>
  );
}

export default Teste;