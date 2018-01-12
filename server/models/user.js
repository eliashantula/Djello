"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.boardInvitation, {
            foreignKey: "userId"
          });
          User.belongsToMany(models.board, {
            through: models.boardInvitation,
            as: "InvitedBoard",
            foreignKey: "userId"
          }); // associations can be defined here
        }
      }
    }
  );
  return User;
};
