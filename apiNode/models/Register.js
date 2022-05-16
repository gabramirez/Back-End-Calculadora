const Sequelize = require('sequelize');
const database = require('./database');

const Register = database.define('register', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    expression: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    }
});

//Deixar que o sistema cria a tabela
// ***IMPORTANTE
//Comentar Linha caso a tabela já foi criada no banco.
//Register.sync();

//Verificar se tem alguma alteração na tabela
//Register.sync({ after: true })

module.exports = Register;