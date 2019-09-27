'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('tipo_galaxia', {
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
    return queryInterface.dropTable('tipo_galaxia');

  }
};
