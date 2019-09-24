'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nebulosa', {
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
      
      distancia : {
        allowNull: true,
        type: Sequelize.FLOAT
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

  //CHAVE ESTRANGEIRA : CLASSFICAÇÃO_NEBULOSA
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nebulosa');

  }
};
