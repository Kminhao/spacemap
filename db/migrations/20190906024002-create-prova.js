'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Provas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      disciplina: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataProva: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Provas');
  }
};