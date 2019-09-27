

'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('galaxias', {
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


      classificacao : {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      
      massa : {
        allowNull: true, 
        type: DataTypes.FLOAT
      },
      
      distancia : {
        allowNull: true,
        type: DataTypes.FLOAT
      },

      numeroe_strelas : {
        allowNull: true,
        type: DataTypes.INTEGER
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
    return queryInterface.dropTable('galaxias');

  }
};