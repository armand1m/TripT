'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;
	var schema = require('../schemas/bairro')(Sequelize);

  var Bairro = sequelize.define('Bairro', schema, {
	  timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
	
  return Bairro;
};
