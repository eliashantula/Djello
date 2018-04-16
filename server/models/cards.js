"use strict";
module.exports = (sequelize, DataTypes) => {
  var Cards = sequelize.define(
    "Cards",
    {
      title: DataTypes.STRING,
      listId: DataTypes.INTEGER
      description: DataTypes.STRING
      completed: DataTypes.INTEGER

    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  Cards.associate = function(models) {
    Cards.belongsTo(models.List, {
      foreignKey: "listId"
    });
  };
  return Cards;
};
