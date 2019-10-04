'use strict'
const moment = require('moment');


module.exports = (sequelize, DataTypes) => {
    const Constelacao = sequelize.define('Constelacao', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    descricao: { type: DataTypes.STRING, allowNull: true},
    estrela_pricipal : { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },

    }, {});
    Constelacao.associate = function (models){
       Constelacao.hasMany(models.Estrela, {foreignKey:'constelacao_id', as : 'estrelas'})
       Constelacao.hasMany(models.Galaxia, {foreignKey:'constelacao_id', as : 'galaxias'})
       Constelacao.hasMany(models.Nebulosa, {foreignKey:'constelacao_id', as : 'nebulosas'})
    }
    return Constelacao;
};

