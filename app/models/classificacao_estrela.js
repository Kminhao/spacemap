'use strict'

module.exports = (sequelize, DataTypes) => {
  const Classificacao_estrela = sequelize.define('Classificacao_estrela',{
    id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
    classificacao: {type: DataTypes.STRING, allowNull:false},
  }, {});

  
  Classificacao_estrela.associate = function (models){
    Classificacao_estrela.hasMany(models.Estrela, {foreignKey:'classificacao_id'})
   
 }
  return Classificacao_estrela;
}
