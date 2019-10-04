'use strict';

//alterado de galaxias -> galaxia, se der BO mexe ai EHUHEHU

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('galaxia', {
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

      tipo : {
        allowNull : true,
        type: DataTypes.STRING,
      },

      magnitude : {
        allowNull: true,
        type: DataTypes.STRING
      },

      massa : {
        allowNull: true,
        type: DataTypes.FLOAT
      },

      distancia : {
        allowNull: true,
        type: DataTypes.FLOAT
      },

      numero_estrelas : {
        allowNull: true,
        type: DataTypes.INTEGER
      },

      constelacao_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'constelacao',
          key:'id'
        }
      },

      galaxia_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'tipo_galaxia',
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

  //CHAVE ESTRANGEIRA : CONSTENLAÇÃO ID
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('galaxia');

  }
};
