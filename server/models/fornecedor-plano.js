'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var FornecedorPlano = sequelize.define('FornecedorPlano', {
    fop_cd_fornecedor_plano: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fop_cd_fornecedor: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    fop_cd_plano: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    fop_vl_plano: {
      type: Sequelize.DECIMAL(18, 2)
    },
    fop_dt_expiracao: {
      type: Sequelize.DATE
    },
    fop_cd_rota: {
      type: Sequelize.INTEGER
    },
    fop_bl_ativo: {
      type: Sequelize.BOOLEAN
    },
    fop_dt_criado: {
      type: Sequelize.DATE
    },
    fop_dt_alterado: {
      type: Sequelize.DATE
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        FornecedorPlano.hasMany(models.FornecedorPlanoVinculo, {
          foreignKey: 'fpv_cd_plano',
          allowNull: false
        });

        FornecedorPlano.belongsTo(models.Fornecedor,{
          foreignKey: 'fop_cd_fornecedor',
          allowNull: false
        })
      }
    }
  });

  return FornecedorPlano;
};
