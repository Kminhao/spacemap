'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('classificacao_nebulosa', {
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

  //CHAVE ESTRANGEIRA : CLASSFICAÇÃO_NEBULOSA
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('classificacao_nebulosa');

  }
};
