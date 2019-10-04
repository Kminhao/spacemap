'use strict'

module.exports = (sequelize, DataTypes) => {
  const Classificacao_estrela = sequelize.define('Classificacao_estrela',{
    id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
    classificacao_id: {type: DataTypes.STRING, allowNull:false},
  }, {});

  Classificacao_estrela.associate = function(models){
    Classificacao_estrela.belongsTo(models.Estrela, {foreignKey: 'classificacao_id', as : 'classificacao '})
  };
  return Classificacao_estrela;
}
