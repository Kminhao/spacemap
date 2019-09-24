'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classificacao_estrela', {
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
      
      cor_aparente : {
        allowNull : true,
        type: Sequelize.STRING,
      },

      temperatura : {
        allowNull : true,
        type: Sequelize.FLOAT,
      },

      descricao : {
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

  //CHAVE ESTRANGEIRA : CLASSFICAÇÃO_ESTRELA
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('classificacao_estrela');

  }
};
