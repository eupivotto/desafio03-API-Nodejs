const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../database/db');

const app = express();
app.use(express.json());

// const sequelize = new Sequelize("mysql://root:1234@127.0.0.1:3306/auth");

// Testando a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida.");
  })
  .catch(err => {
    console.error("Erro ao conectar ao banco de dados: ", err);
  });

const saltRounds = 10;
const secretKey = "swordfish";

// Definindo o modelo de usuário
const Usuario = sequelize.define("Usuario", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Utilizando async/await para tornar a função assíncrona


app.post("/registrar", async (req, res) => {
    
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: "E-mail e senha são obrigatórios." });
  }

  const hashSenha = bcrypt.hashSync(senha, saltRounds);

  try {
    // Consulta ao banco de dados para verificar se já existe um usuário com o mesmo e-mail
    const usuarioExistente = await Usuario.findOne({ where: { email: email } });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "E-mail já cadastrado." });
    }

    // Inserção do novo usuário caso o e-mail não esteja cadastrado
    await Usuario.create({ email: email, senha: hashSenha });
    return res.status(201).json({ mensagem: "Usuário criado com sucesso." });
  } catch (err) {
    console.error("Erro ao criar usuário: ", err);
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
});

// Utilizando async/await para tornar a função assíncrona
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: "E-mail e senha são obrigatórios." });
  }

  try {
    const usuario = await Usuario.findOne({ where: { email: email } });
    if (!usuario) {
      return res.status(401).json({ mensagem: "E-mail ou senha inválidos." });
    }

    const hashSenha = usuario.senha;
    if (!bcrypt.compareSync(senha, hashSenha)) {
      return res.status(401).json({ mensagem: "E-mail ou senha inválidos." });
    }

    const token = jwt.sign({ email: email }, secretKey, { expiresIn: "1h" });
    return res.status(200).json({ mensagem: "Login efetuado com sucesso.", token: token });
  } catch (err) {
    console.error("Erro ao buscar usuário: ", err);
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
});
