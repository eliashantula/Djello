'use strict';
module.exports = (sequelize, DataTypes) => {
  var Board = sequelize.define('Board', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }
  );
  Board.associate = function(models) {
    Board.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };
  return Board;
};
 