'use strict'


module.exports = (sequelize, DataTypes) => {
    const Tipo_galaxia = sequelize.define('Tipo_galaxia', {
      id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, autoIncrement:true},
      nome: {type: DataTypes.STRING, allowNull:false},
      descricao: {type: DataTypes.STRING, allowNull:true}
    }, {});
    Tipo_galaxia.associate = function(models){
      Tipo_galaxia.belongsTo(models.Galaxia, {foreignKey: 'galaxia_id', as : 'galaxia'})
    };
    return Tipo_galaxia;
}
