const express = require('express');
const cors = require('cors');
const app = express();

app.use('*', cors());
app.use(express.json());

const Register = require('./models/Register');//Esse comando irá criar a tabela

app.get("/", async (req, res) => {
    res.send('Inicial!');
})

app.post("/cadastrar", async (req, res) => {

    await Register.create(req.body)
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Registro inserido!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao inserir!"
            });
        });

});

app.get("/listar", async (req, res) => {
    await Register.findAll({}).then((register) => {
        return res.json(register)
    })
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Registro inserido!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao inserir!"
            });
        });
});

app.listen(8080, () => {
    console.log('Server start...');
})