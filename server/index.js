const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());

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
          res.json({ msg: "Usuário logado", token: token });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Utilizador não registrado!" });
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
