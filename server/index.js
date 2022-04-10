const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "crudgames"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { preco } = req.body;
    const { categoria } = req.body;

    let sql = "INSERT INTO games (nome, preco, categoria) VALUES (?, ?, ?)";
    db.query(sql, [nome, preco, categoria], (err, result) => {
        console.log(err);
    });
    res.send('ola mundo.');
});

app.get("/getCards", (req, res) => {
    let sql = "SELECT * FROM games";
    db.query(sql, (err, result) => {
        console.log(err);
        res.send(result);
    });
//    res.send('ola mundo.');
});
app.listen(3002, () => {
    console.log('rodando servidor');
});
