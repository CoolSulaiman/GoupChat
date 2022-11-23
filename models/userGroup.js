const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Usergroup = sequelize.define('usergroup' , {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    }
})

module.exports = Usergroup;
