"use strict";
module.exports = (sequelize, DataTypes) => {
  var Board = sequelize.define(
    "Board",
    {
      title: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          Board.hasMany(models.boardInvitation, {
            foreignKey: "boardId"
          });
          Board.belongsToMany(models.User, {
            through: models.boardInvitation,
            as: "Invitee",
            foreignKey: "boardId"
          });
        }
      }
    }
  );
  return Board;
};
