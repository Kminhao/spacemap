'use strict'
const moment = require('moment');


module.exports = (sequelize, DataTypes) => {
    const Estrela = sequelize.define('Estrela', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    descricao: { type: DataTypes.STRING, allowNull: true},
    magnitude: {type: DataTypes.STRING, allowNull:true},
    tamanho: {type: DataTypes.STRING, allowNull:true},
    constelacao_id: { type: DataTypes.INTEGER, allowNull:true},
    massa: {type: DataTypes.FLOAT, allowNull:true},

    }, {});
    Estrela.associate = function (models){
        Estrela.belongsTo(models.Constelacao, {foreignKey: 'constelacao_id', as :' constelacao'})
        Estrela.hasOne(models.Classsificacao_estrela, {foreignKey: 'classificacao_id', as: 'classificacao'})

    }
    return Estrela;
};