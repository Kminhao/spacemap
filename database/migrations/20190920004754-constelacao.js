'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('constelacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      descricao: {
        allowNull : true,
        type: Sequelize.STRING,

      },

      estrela_principal: {
        allowNull: true,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('constelacao');

  }
};  