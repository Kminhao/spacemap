'use strict'

module.exports = (sequelize, DataTypes) => {
  const classificacao_estrela = sequelize.Define('Classificacao_estrela',{
    id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
    classificacao: {type: DataTypes.STRING, allowNull:false},
  }; {});

  Classificacao_estrela.associate = function(models){

  };
  return Classificacao_estrela;
}
