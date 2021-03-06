'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var Veiculo = sequelize.define('Veiculo', {
    vei_cd_veiculo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    vei_ds_placa: {
      allowNull: false,
      type: Sequelize.STRING
    },
    vei_ds_der: {
      allowNull: false,
      type: Sequelize.STRING
    },
    vei_qt_vagas: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    vei_ds_modelo: {
      type: Sequelize.STRING
    },
    vei_ds_cor: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
          Veiculo.belongsToMany(models.Instituicao, {
               as: 'RotasInstituicao',
               through: {
                 model: models.InstituicaoVeiculo,
                 unique: false
               },
               foreignKey: 'inv_cd_veiculo',
               otherKey: 'inv_cd_instituicao',
               timestamps: false
         });

          Veiculo.belongsTo(models.Usuario, {
            foreignKey: 'vei_cd_usuario',
            allowNull: false
          });

      }
    }
  });

  return Veiculo;
};
