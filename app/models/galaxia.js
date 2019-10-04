'use strict'

module.exports = (sequelize, DataTypes) => {
  const galaxia = sequelize.Define('Galaxia', {
    id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
    nome: {type: DataTypes.STRING, allowNull:false},
    descricao: {type: DataTypes.STRING, allowNull:true},
    tipo: {type: DataTypes.STRING, allowNull:true},
    magnitude: {type: DataTypes.STRING, allowNull:true},
    classificacao: {type: DataTypes.INTEGER, allowNull:true},
    massa: {type: DataTypes.FLOAT, allowNull:true},
    distancia: {type: DataTypes.FLOAT, allowNull:true},
    numero_estrelas: {type: DataTypes.INTEGER, allowNull:true},
  }, {});

  Galaxia.associate = function(models){
    Galaxia.belongsTo(models.Constelacao, {foreignKey: 'constelacao_id', as : 'constelacao'})

  };

  return Galaxia;
}
