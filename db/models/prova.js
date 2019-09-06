'use strict';
module.exports = (sequelize, DataTypes) => {
  const Prova = sequelize.define('Prova', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: true },
    disciplina: { type: DataTypes.STRING, allowNull: false, },
    professor: { type: DataTypes.STRING, allowNull: false, },
    dataProva: { type: DataTypes.DATEONLY, allowNull: false, },
  }, {});
  Prova.associate = function (models) {
    // associations can be defined here
  };
  return Prova;
};