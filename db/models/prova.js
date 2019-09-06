'use strict';
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Prova = sequelize.define('Prova', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: true },
    disciplina: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    professor: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    dataProva: { type: DataTypes.DATEONLY, allowNull: false, validate: { isAfter: new Date().toISOString() } },
    dataProvaLocal: {
      type: DataTypes.VIRTUAL,
      get() {
        let date = moment(this.getDataValue('dataProva'));
        return date.format('DD/MM/YYYY');
      }
    }
  }, {});
  Prova.associate = function (models) {
    // associations can be defined here
  };
  return Prova;
};