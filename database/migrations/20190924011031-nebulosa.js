'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('nebulosa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },

      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      descricao: {
        allowNull : true,
        type: DataTypes.STRING,

      },

      distancia : {
        allowNull: true,
        type: DataTypes.FLOAT
      },

      constelacao_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'constelacao',
          key: 'id'
        }
      },

      classificacao_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'classificacao_nebulosa',
          key: 'id'
        }
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
    return queryInterface.dropTable('nebulosa');

  }
};
