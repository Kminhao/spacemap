'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estrela', {
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

      magnitude : {
        allowNull: true,
        type: Sequelize.STRING
      },

      tamanho : {
        allowNull: true,
        type: Sequelize.STRING
      },
      
      classificacao : {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      
      massa : {
        allowNull: true, 
        type: Sequelize.FLOAT
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

  //CHAVE ESTRANGEIRA : CONSTENLAÇÃO ID / CLASSIFICAÇÃO_ESTRELA
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estrela');

  }
};
