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
          // associations can be defined here
        }
      }
    }
  );
  User.associate = function(models) {
    User.hasMany(models.Board, {
      foreignKey: "userId"
    });
  };
  return User;
};
