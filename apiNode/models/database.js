const Sequelize = require('sequelize');

const connection = new Sequelize("register", "root", "gabriel123", {
        host: 'localhost',
        dialect: 'mysql'
});

module.exports = connection;