'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estrela', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
        type: DataTypes.INTENGER.UNSIGNED
      },

      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      descricao: {
        allowNull = true,
        type: DataTypes.STRING,

      },

      estrela_principal: {
        allowNull: true,
        type: DataTypes.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estrela');

  }
};
