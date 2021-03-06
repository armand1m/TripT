'use strict';
module.exports = function (sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
    var InstituicaoVeiculo = sequelize.define('InstituicaoVeiculo', {
        inv_cd_instituicao_veiculo: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        inv_cd_instituicao: {
            allowNull: true,
            type: Sequelize.INTEGER,
            unique: false
        },
        inv_cd_veiculo: {
            allowNull: false,
            type: Sequelize.INTEGER,
            unique: false
        },
        inv_cd_fornecedor: {
            allowNull: false,
            type: Sequelize.INTEGER,
            unique: false
        },
        inv_ds_turno: {
            allowNull: false,
            type: Sequelize.STRING
        },
        inv_cd_tipo_transporte: {
            allowNull: true,
            type: Sequelize.INTEGER
        }
    },  {
    timestamps: false,
    classMethods: {
      associate: function(models) {
          InstituicaoVeiculo.hasMany(models.VeiculoBairro, {
               foreignKey: 'veb_cd_instituicao_veiculo',
               allowNull: false
          });

          InstituicaoVeiculo.belongsTo(models.Veiculo, {
            foreignKey: 'inv_cd_veiculo',
            allowNull: false
          });

          InstituicaoVeiculo.belongsTo(models.Instituicao, {
            foreignKey: 'inv_cd_instituicao',
            allowNull: false
          });

          InstituicaoVeiculo.belongsTo(models.Fornecedor, {
            foreignKey: 'inv_cd_fornecedor',
            allowNull: false
          });
      }
    }
  });
    return InstituicaoVeiculo;
};
