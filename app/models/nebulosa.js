'use strict'

module.exports = (sequelize, DataTypes) => {
  const Nebulosa = sequelize.define('Nebulosa', {
    id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
    nome: {type: DataTypes.STRING, allowNull:false},
    descricao: {type: DataTypes.STRING, allowNull:true},
    classificacao_id: {type: DataTypes.INTEGER.UNSIGNED, allowNull:true},
    distancia: {type: DataTypes.FLOAT, allowNull:true},
  }, {});

  Nebulosa.associate = function(models){
    Nebulosa.hasOne(models.Classificacao_nebulosa, {foreignKey: 'classificacao_id', as : 'class'})
    Nebulosa.belongsTo(models.Constelacao, {foreignKey: 'constelacao_id', as : 'constelacao'})
  };
  return Nebulosa;

}
