'use strict'


module.exports = (sequelize, DataTypes) => {
    const tipo_galaxia = sequelize.Define('Tipo_galaxia', {
      id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
      nome: {type: DataTypes.STRING, allowNull:false},
      descricao: {type: DataTypes.STRING, allowNull:true}
    }, {});
    Tipo_galaxia.associate = function(models){
      Tipo_galaxia.belongsTo(models.Galaxia, {foreignKey: 'galaxia_id', as : 'galaxia'})
    };
    return Tipo_galaxia;
}
