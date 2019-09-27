'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('classificacao_estrela', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },

      classificacao: {
        allowNull : true,
        type: DataTypes.STRING,

      },
      
      cor_aparente : {
        allowNull : true,
        type: DataTypes.STRING,
      },

      temperatura : {
        allowNull : true,
        type: DataTypes.FLOAT,
      },

      descricao : {
        allowNull : true,
        type: DataTypes.STRING,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })

  },

  //CHAVE ESTRANGEIRA : CLASSFICAÇÃO_ESTRELA
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('classificacao_estrela');

  }
};
