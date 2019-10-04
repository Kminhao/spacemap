'use strict'

module.exports = (sequelize, DataTypes) => {
  const Classificacao_nebulosa = sequelize.define('Classificacao_nebulosa', {
    classificacao: DataTypes.STRING
  }, {});
  
  Classificacao_nebulosa.associate = function (models) {
    Classificacao_nebulosa.belongsTo(models.Nebulosa, {foreignKey: 'classificacao_id', as : 'class'})

  }
  return Classificacao_nebulosa;
}
