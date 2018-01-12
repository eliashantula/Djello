'use strict';
let models = require('./../models')
module.exports = {
  up: (queryInterface, Sequelize) => {
    var boards = [];
  for (let i = 0; i < 10; i++) {
    boards.push({
      title: `Foo${ i }`
    });
  }
   return queryInterface.bulkInsert('Boards', boards);
},
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Boards', null, {},models.Board);
   
  }
};
