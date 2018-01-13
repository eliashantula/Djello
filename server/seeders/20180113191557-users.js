'use strict';
let models = require('./../models')
module.exports = {
  up: (queryInterface, Sequelize) => {

  var users = [];
  for (let i = 0; i < 10; i++) {
    users.push({
      fname: `Foo${ i }`,
      lname: `Bar${ i }`,
      username: `foobar${ i }`,
      password: `pass${ i }`
    });

  }
   return queryInterface.bulkInsert('Users', users);
},
  down: (queryInterface, Sequelize) => {
  
return queryInterface.bulkDelete('Users', null, {}, models.User);
    
  }
};
