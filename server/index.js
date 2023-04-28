const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const multer  = require('multer');
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

app.get('/noticias', (req, res) => {
  db.query('SELECT * FROM notev ORDER BY idnotev DESC', (err, results) => {
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

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
});

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('File uploaded successfully');
});


app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
