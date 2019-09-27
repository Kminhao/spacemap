'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('constelacao', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },

      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      descricao: {
        allowNull : true,
        type: DataTypes.STRING,

      },

      estrela_principal: {
        allowNull: true,
        type: DataTypes.STRING,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    })

  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('constelacao');

  }
};  