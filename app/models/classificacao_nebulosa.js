'use strict'

module.exports = (sequelize, DataTypes) => {
  const classificacao_nebulosa = sequelize.Define('Classificacao_nebulosa', {
    id: {types: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
    classificacao: {type: DataTypes.STRING, allowNull:false},
  }; {});
  Classificacao_nebulosa.associate = function (models) {

  }
  return Classificacao_nebulosa;
}