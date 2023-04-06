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

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    } else if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          res.send(err);
        } else {
          db.query(
            "INSERT INTO usuarios (email, password) VALUES (?, ?)",
            [email, hash],
            (error, response) => {
              if (error) {
                res.send(error);
              } else {
                res.send({ msg: "Usuário cadastrado com sucesso" });
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

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    } else if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        } else if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
