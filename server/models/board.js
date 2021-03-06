"use strict";
module.exports = (sequelize, DataTypes) => {
  var Board = sequelize.define(
    "Board",
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER

    },
    {
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
    Board.hasMany(models.List, {
      foreignKey: "boardId"
    });
  };
  return Board;
};
