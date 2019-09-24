'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classificacao_nebulosa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },

      classificacao: {
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

  //CHAVE ESTRANGEIRA : CLASSFICAÇÃO_NEBULOSA
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('classificacao_nebulosa');

  }
};
