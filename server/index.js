const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const multer = require('multer');
const path = require('path');


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
    cb(null, '../public/');
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




app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
