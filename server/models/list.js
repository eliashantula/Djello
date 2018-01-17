"use strict";
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define(
    "List",
    {
      title: DataTypes.STRING,
      boardId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  List.associate = function(models) {
    List.belongsTo(models.Board, {
      foreignKey: "boardId"
    });
  };
  return List;
};
