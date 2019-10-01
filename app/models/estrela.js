'use strict'
const moment = require('moment');


module.exports = (sequelize, DataTypes) => {
    const Constelacao = sequelize.define('Estrela', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    descricao: { type: DataTypes.STRING, allowNull: true},
    magnitude: {type: DataTypes.STRING, allowNull:true},
    tamanho: {type: DataTypes.STRING, allowNull:true},
    classificacao: { type: DataTypes.INTEGER, allowNull:true},
    massa: {type: DataTypes.FLOAT, allowNull:true},

    }, {});
    Constelacao.associate = function (models){
        //relacionamentos aqui
    }
    return  Constelacao;
};