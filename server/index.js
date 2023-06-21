const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');

const bodyParser = require('body-parser');


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.get('/noticias/ultima', (req, res) => {
  db.query('SELECT * FROM notev ORDER BY idnotev DESC LIMIT 1', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar a última notícia');
    } else {
      res.send(result[0]);
    }
  });
});

app.get('/videos/ultima', (req, res) => {
  db.query('SELECT * FROM videos ORDER BY id_videos DESC LIMIT 1', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.get('/dadosnoticia', (req, res) => {
  db.query(`SELECT * FROM notev where categoria_notev ='Noticia'`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});





app.get('/dadosvideo', (req, res) => {
  db.query(`SELECT * FROM videos`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});


app.get('/dadosnoticiaedit/:idnotev', (req, res) => {
  const idnotev = req.params.idnotev;

  db.query(`SELECT * FROM notev WHERE idnotev ='${idnotev}'`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});


app.get('/dadoseventoedit/:idnotev', (req, res) => {
  const idnotev = req.params.idnotev;

  db.query(`SELECT * FROM notev WHERE idnotev ='${idnotev}'`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});






app.get('/dadosevento', (req, res) => {

  db.query(`SELECT * FROM notev where categoria_notev ='Evento'`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});


app.get('/dadosmarcador', (req, res) => {

  db.query(`SELECT * FROM marcador`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});





app.get('/dadospagina', (req, res) => {


  db.query(`SELECT * FROM pagina `, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});



app.get('/noticias/:idnotev', (req, res) => {
  const idnotev = req.params.idnotev;

  // Consulta ao banco de dados para buscar a notícia com base no ID
  const query = `SELECT * FROM notev WHERE idnotev = '${idnotev}'`;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Erro na consulta ao banco de dados:', error);
      res.status(500).json({ message: 'Erro ao buscar os dados da notícia' });
    } else {
      if (results.length > 0) {
        const noticia = results[0];
        res.json(noticia); // Retorna a notícia encontrada como resposta JSON
      } else {
        res.status(404).json({ message: 'Notícia não encontrada' }); // Retorna um erro 404 se a notícia não for encontrada
      }
    }
  });
});

app.get('/view/:idnotev', (req, res) => {
  const idnotev = req.params.idnotev;
  console.log(idnotev);
  db.query('UPDATE notev SET view_notev = view_notev + 1 WHERE idnotev = ?', [idnotev], (err, results) => {
    if (err) throw err;
    
  });
});


app.get('/viewvideo/:videoId', (req, res) => {
  const videoId = req.params.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  
  console.log(videoUrl);
  
  // Atualizar o campo view_video na tabela videos
  const sql = 'UPDATE videos SET view_video = view_video + 1 WHERE url_video = ?';
  db.query(sql, [videoUrl], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Ocorreu um erro ao atualizar a visualização do vídeo.' });
    }
    
    console.log('Visualização do vídeo atualizada com sucesso.');
    
    // Exemplo de resposta enviada de volta para o cliente
    res.json({ message: 'Recebido o URL do vídeo com sucesso.', videoUrl });
  });
});


app.get('/viewvideoquadrado/:videoUrl', (req, res) => {
  const videoUrl = req.params.videoUrl;
  console.log(videoUrl);
  
  const sql = 'UPDATE videos SET view_video = view_video + 1 WHERE url_video = ?';
  db.query(sql, [videoUrl], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Ocorreu um erro ao atualizar a visualização do vídeo.' });
    }
    
    console.log('Visualização do vídeo atualizada com sucesso.');
    
    // Exemplo de resposta enviada de volta para o cliente
    
  });
});


// Rota para buscar o total de visualizações
app.get('/totalviewvideo', (req, res) => {
  const query = 'SELECT SUM(view_video) AS total_visualizacoes FROM videos';

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

   
    const totalVisualizacoes = result[0].total_visualizacoes || 0;
    res.json({ total_visualizacoes: totalVisualizacoes });
  });
});



app.get('/totalviewnoticias', (req, res) => {
  const query = 'SELECT SUM(view_notev) AS totalVisualizacoesnoti FROM notev WHERE categoria_notev = "Noticia"';
console.log();
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    const totalVisualizacoesnoti = result[0].totalVisualizacoesnoti || 0;
    res.json({ totalVisualizacoesnoti: totalVisualizacoesnoti });
  });
});

app.get('/totalviewnoticiasevento', (req, res) => {
  const query = 'SELECT SUM(view_notev) AS totalVisualizacoesevento FROM notev WHERE categoria_notev = "Evento"';
console.log();
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    const totalVisualizacoesevento = result[0].totalVisualizacoesevento || 0;
    res.json({ totalVisualizacoesevento: totalVisualizacoesevento });
  });
});


app.get('/topvideos', (req, res) => {
  const query = 'SELECT * FROM videos ORDER BY view_video DESC LIMIT 5';

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
});


app.get('/topnoticias', (req, res) => {
  const query = "SELECT * FROM notev WHERE categoria_notev = 'Noticia' ORDER BY view_notev DESC LIMIT 5";

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
});


app.get('/topevento', (req, res) => {
  const query = "SELECT * FROM notev WHERE categoria_notev = 'Evento' ORDER BY view_notev DESC LIMIT 5";

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/noticias', (req, res) => {
  db.query('SELECT * FROM notev ORDER BY idnotev DESC', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/videos', (req, res) => {
  db.query('SELECT * FROM videos ORDER BY id_videos DESC', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/historia', (req, res) => {
  db.query('SELECT * FROM historia', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.post('/uploadhistoria', (req, res) => {
  // Retrieve data from the request body
  const inputData = {
    imagem_titulo: req.body.inputValue,
    titulo: req.body.titulo,
    texto_1: req.body.texto1,
    texto_2: req.body.texto2,
    img_historia: req.body.imgHistoria,
    objetivo_01: req.body.objetivo01,
    objetivo_01_titulo: req.body.objetivo01Titulo,
    objetivo_01_texto: req.body.objetivo01Texto,
    objetivo_02: req.body.objetivo02,
    objetivo_02_titulo: req.body.objetivo02Titulo,
    objetivo_02_texto: req.body.objetivo02Texto,
    objetivo_03: req.body.objetivo03,
    objetivo_03_titulo: req.body.objetivo03Titulo,
    objetivo_03_texto: req.body.objetivo03Texto,
    objetivo_img: req.body.objetivoImg,
    compromisso1: req.body.compromisso1,
    compromisso2: req.body.compromisso2,
    compromisso3: req.body.compromisso3,
    certificado1: req.body.certificado1,
    certificado2: req.body.certificado2,
    certificado3: req.body.certificado3,
    certificado4: req.body.certificado4,
    certificado5: req.body.certificado5,
    texto1_integrante: req.body.texto1_integrante,
    texto2_integrante: req.body.texto2_integrante,
    img_integrante: req.body.img_integrante
  };

  // Update the data in the 'historia' table for the record with ID 1
  db.query('UPDATE historia SET ? WHERE id_historia = 1', inputData, (error, results, fields) => {
    if (error) {
      console.error('Erro ao colocar no servidor:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Dados trocados com sucesso!');
      res.send('Dados recebidos com sucesso!');
    }
  });
});


app.get('/recrutamento', (req, res) => {
  const query = 'SELECT * FROM recrutamento';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao buscar dados de recrutamento:', error);
      res.status(500).json({ error: 'Erro ao buscar dados de recrutamento' });
      return;
    }

    res.json(results);
  });
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do multer
const storagee = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/recrutamento'); // Especifique o caminho para salvar as imagens
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploado = multer({ storage: storagee }).fields([
  { name: 'imgEsquerda', maxCount: 1 },
  { name: 'imgDireita', maxCount: 1 },
]);

// Rota para atualizar os dados
app.post('/recursoupdate', uploado, (req, res) => {
  const imgEsquerda = req.files['imgEsquerda'] ? req.files['imgEsquerda'][0] : null;
  const imgDireita = req.files['imgDireita'] ? req.files['imgDireita'][0] : null;

  console.log('Imagens recebidas:');
  console.log('Imagem Esquerda:', imgEsquerda);
  console.log('Imagem Direita:', imgDireita);

  // Acessando outros dados enviados pelo cliente
  const {
    emailEsquerda,
    telefoneEsquerda,
    moradaEsquerda,
    emailDireita,
    telefoneDireita,
    moradaDireita
  } = req.body;

  const query = `
    UPDATE recrutamento
    SET img_esquerda = COALESCE(?, img_esquerda),
        email_esquerda = ?,
        telefone_esquerda = ?,
        morada_esquerda = ?,
        img_direita = COALESCE(?, img_direita),
        email_direita = ?,
        telefone_direita = ?,
        morada_direita = ?
    WHERE id_recrutamento = 1
  `;

  db.query(
    query,
    [
      imgEsquerda ? imgEsquerda.filename : null,
      emailEsquerda,
      telefoneEsquerda,
      moradaEsquerda,
      imgDireita ? imgDireita.filename : null,
      emailDireita,
      telefoneDireita,
      moradaDireita
    ],
    (error, results) => {
      if (error) {
        console.error('Erro ao atualizar os dados:', error);
        res.status(500).send('Erro ao atualizar os dados');
        return;
      }

      res.send('Dados atualizados com sucesso!');
    }
  );
});


app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM utilizador WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    } else if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          res.send(err);
        } else {
          db.query(
            "INSERT INTO utilizador (email, password) VALUES (?, ?)",
            [email, hash],
            (error, response) => {
              if (error) {
                res.send(error);
              } else {
                res.send({ msg: "Utilizador cadastrado com sucesso" });
              }
            }
          );
        }
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

const jwt = require('jsonwebtoken');
const secretKey = 'sua_chave_secreta';

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM utilizador WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    } else if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        } else if (response) {
          const loggedInUser = {
            email: result[0].email,
            id: result[0].id
          };
          const token = jwt.sign(loggedInUser, secretKey, { expiresIn: '1h' });
          res.json({ msg: "Utilizador conectado", token: token });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Utilizador não registrado!" });
    }
  });
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
const moment = require('moment');

app.use(express.static('public'));

app.post('/uploadnoticia', upload.single('image'), (req, res) => {
  const { filename, originalname } = req.file;
  const { titulo, descricao, data } = req.body;
  const categoria = 'Noticia'; // Valor padrão definido como 'Noticia'

  // Converte a data para o formato correto (yyyy-mm-dd)
  const dataFormatada = moment(data, 'DD/MM/YYYY').format('YYYY-MM-DD');

  db.query(
    'INSERT INTO notev (titulo_notev, descr_notev, categoria_notev, data_notev, imagem_notev) VALUES (?, ?, ?, ?, ?)',
    [titulo, descricao, categoria, dataFormatada, filename],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar os dados do upload na base de dados');
      } else {
        res.send('File uploaded successfully and data saved to database');
      }
    }
  );
});



app.post('/uploadevento', upload.single('image'), (req, res) => {
  const { filename, originalname } = req.file;
  const { titulo, descricao, data } = req.body;
  const categoria = 'Evento'; // Valor padrão definido como 'Evento'

  // Converte a data para o formato correto (yyyy-mm-dd)
  const dataFormatada = moment(data, 'DD/MM/YYYY').format('YYYY-MM-DD');

  db.query(
    'INSERT INTO notev (titulo_notev, descr_notev, categoria_notev, data_notev, imagem_notev) VALUES (?, ?, ?, ?, ?)',
    [titulo, descricao, categoria, dataFormatada, filename],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar os dados do upload na base de dados');
      } else {
        res.send('File uploaded successfully and data saved to database');
      }
    }
  );
});



// Rota para obter os marcadores
app.get('/marcador', (req, res) => {
  db.query('SELECT * FROM marcador', (error, results) => {
    if (error) {
      console.error('Erro ao obter os marcadores:', error);
      res.status(500).json({ error: 'Erro ao obter os marcadores' });
      return;
    }
    res.json(results);
  });
});


app.put('/dadosmarcador/:id', (req, res) => {
  const idMarcador = req.params.id;
  const { nome_marcador, contacto_marcador } = req.body;

  const query = 'UPDATE marcador SET nome_marcador = ?, contacto_marcador = ? WHERE idmarcador = ?';
  const values = [nome_marcador, contacto_marcador, idMarcador];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Erro ao atualizar o marcador: ', error);
      res.status(500).json({ error: 'Erro ao atualizar o marcador' });
    } else {
      console.log('Marcador atualizado com sucesso!');
      res.status(200).json({ message: 'Marcador atualizado com sucesso' });
    }
  });
});


// Rota para receber a solicitação POST e inserir na tabela "marcador"
app.post('/inserirmarcador', (req, res) => {
  const { nome, contacto } = req.body;
  

  const query = 'INSERT INTO marcador (nome_marcador, contacto_marcador) VALUES (?, ?)';
  db.query(query, [nome, contacto], (error, results) => {
    if (error) {
      console.error('Erro ao inserir dados na tabela:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      const insertedId = results.insertId;
      res.json({ id: insertedId, nome, contacto });
    }
  });
});



app.get('/dadosmarcador/:idmarcador', (req, res) => {
  const idMarcador = req.params.idmarcador;

  db.query(`SELECT * FROM marcador WHERE idmarcador = '${idMarcador}'`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os dados' });
    } else {
      res.json(results);
    }
  });
});



app.get('/noticias/:idnotev', (req, res) => {
  const idnotev = req.params.idnotev;

  // Consulta SQL para buscar a notícia com o ID fornecido
  const query = `
    SELECT *
    FROM banco.notev
    WHERE idnotev = ?
  `;

  // Execute a consulta SQL passando o valor de idnotev
  db.query(query, [idnotev], (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});




app.get('/noticias/ultimas-tres/:idnotev', (req, res) => {
  const idnotev = req.params.idnotev;

  // Consulta SQL para buscar as três últimas notícias antes do ID fornecido
  const query = `
    SELECT *
    FROM (
      SELECT *
      FROM banco.notev
      WHERE idnotev < ?
      ORDER BY idnotev DESC
      LIMIT 3
    ) AS subquery
    ORDER BY idnotev ASC;
  `;

  // Execute a consulta SQL passando o valor de idnotev
  db.query(query, [idnotev], (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});


app.post('/updateNoticia/:idnotev', upload.single('imagem'), (req, res) => {
  const idnotev = req.params.idnotev;
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const data = req.body.data.slice(0, 10);
  const imagem = req.file;

  // Lógica para atualizar os dados no banco de dados
  let query = 'UPDATE notev SET titulo_notev = ?, descr_notev = ?, data_notev = ?';
  let params = [titulo, descricao, data];

  if (imagem) {
    query += ', imagem_notev = ?';
    params.push(imagem.filename);
  }

  query += ' WHERE idnotev = ?';
  params.push(idnotev);

  db.query(query, params, (error, results) => {
    if (error) {
      console.error('Erro ao atualizar notícia:', error);
      res.status(500).json({ message: 'Erro ao atualizar notícia.' });
    } else {
      console.log('Notícia atualizada:', results);
      res.status(200).json({ message: 'Notícia atualizada com sucesso!' });
    }
  });
});


app.post('/updateEvento/:idnotev', upload.single('imagem'), (req, res) => {
  const idnotev = req.params.idnotev;
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const data = req.body.data.slice(0, 10);
  const imagem = req.file;

  // Lógica para atualizar os dados no banco de dados
  let query = 'UPDATE notev SET titulo_notev = ?, descr_notev = ?, data_notev = ?';
  let params = [titulo, descricao, data];

  if (imagem) {
    query += ', imagem_notev = ?';
    params.push(imagem.filename);
  }

  query += ' WHERE idnotev = ?';
  params.push(idnotev);

  db.query(query, params, (error, results) => {
    if (error) {
      console.error('Erro ao atualizar notícia:', error);
      res.status(500).json({ message: 'Erro ao atualizar notícia.' });
    } else {
      console.log('Notícia atualizada:', results);
      res.status(200).json({ message: 'Notícia atualizada com sucesso!' });
    }
  });
});




app.get('/rota-do-servidor/:idnotev', (req, res) => {
  const idnotev = req.params.idnotev;
  console.log(idnotev);
  const query = `DELETE FROM notev WHERE idnotev = '${idnotev}'`;

  // Executar a consulta
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

// Rota para deletar um marcador pelo ID
app.delete('/apagarmarcador/:id', (req, res) => {
  const idmarcador = req.params.id;

  const query = 'DELETE FROM marcador WHERE idmarcador = ?';
  db.query(query, [idmarcador], (error, results) => {
    if (error) {
      console.error('Erro ao deletar marcador:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json({ message: 'Marcador deletado com sucesso' });
    }
  });
});



app.get('/apagarvideo/:id_videos', (req, res) => {
  const id_videos = req.params.id_videos;
  console.log(id_videos);
  const query = `DELETE FROM videos WHERE id_videos = '${id_videos}'`;

  // Executar a consulta
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});


// Rota para adicionar vídeo
app.post('/adicionar-video', (req, res) => {
  const { titulo, url } = req.body;

  // Executar a consulta INSERT
  const query = `INSERT INTO videos (url_video, titulo_video) VALUES (?, ?)`;
  db.query(query, [url, titulo], (error, results) => {
    if (error) {
      console.error('Erro ao adicionar o vídeo:', error);
      res.status(500).json({ message: 'Erro ao adicionar o vídeo' });
    } else {
      res.status(200).json({ message: 'Vídeo adicionado com sucesso!' });
    }
  });
});


app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
