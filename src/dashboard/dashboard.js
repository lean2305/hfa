import React, { useState } from 'react';
import axios from 'axios';


function Dashboard_conteudo() {
    const [selectedImage, setSelectedImage] = useState(null);

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
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
  }
  




function Dashboard() {
  return (
    <div>
        <Dashboard_conteudo />
    </div>
  );
}

export default Dashboard;
