const { Sequelize } = require('sequelize');

const dataSource = new Sequelize({
	dialect: 'sqlite',
	storage: './technicalTest.db',
});

module.exports = dataSource