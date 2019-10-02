'use strict'

module.exports = (sequelize, DataTypes) => {
  const nebulosa = sequelize.Define('Nebulosa', {
    id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
    nome: {type: DataTypes.STRING, allowNull:false},
    descricao: {type: DataTypes.STRING, allowNull:true},
    distancia: {type: DataTypes.FLOAT, allowNull:true},
  }; {});

  Nebulosa.associate = function(models){
    //relacionamentos
  };
  return Nebulosa;

}
