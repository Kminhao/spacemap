'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('estrela', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },

      nome: {
        allowNull: false,
        type: DataTypes.STRING
      },

      descricao: {
        allowNull : true,
        type: DataTypes.STRING

      },

      magnitude : {
        allowNull: true,
        type: DataTypes.STRING
      },

      tamanho : {
        allowNull: true,
        type: DataTypes.STRING
      },

      // classificacao : {
      //   allowNull: false,
      //   type: DataTypes.INTEGER
      // },

      massa : {
        allowNull: true,
        type: DataTypes.FLOAT
      },

      distancia : {
        allowNull: true,
        type: DataTypes.FLOAT
      },


      classificacao_id : {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Classificacao_estrela',
          key: 'id'
        }
      },


//VÊ ESSA DAQUI DEPOIS 
      constelacao_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'constelacao',
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

  //CHAVE ESTRANGEIRA : CONSTENLAÇÃO ID / CLASSIFICAÇÃO_ESTRELA
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('estrela');

  }
};
