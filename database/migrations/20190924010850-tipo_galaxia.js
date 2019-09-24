'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tipo_galaxia', {
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

  //CHAVE ESTRANGEIRA : CONSTENLAÇÃO ID 
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipo_galaxia');

  }
};
