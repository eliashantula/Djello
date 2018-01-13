var express = require("express");
var router = express.Router();
var models = require("./../models");
var { User, Board} = models;
var sequelize = models.sequelize;

router.get("/users", function(req, res, next) {
  User.findAll({
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get("/users/:id", function(req, res, next) {
  User.findOne({
    where: { id: req.params.id }
    //include: [Board] //[{model: Board}]
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get("/boards", function(req, res, next) {
  Board.findAll({
    //include: [Review]
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

// ----------------------------------------
// Create User
// ----------------------------------------
router.post("/users", (req, res) => {
  console.log(req.body);
  
  var details = {
    fname: req.body.firstName,
    lname: req.body.lastName,
    username: req.body.username,
    password: req.body.password
  };

  User.create(details)
    .then(user => {
      res.json(user);
    })
    .catch(e => next(e));
});

router.post("/users/:id/newboard", async (req, res) => {
  //chage to board
  try {
    const id = req.params.id;

    let newBoard = req.body.newBoard;

    let board = await Board.create({ name: newBoard, userId: id });

    res.json(board);
  } catch (e) {
    next(e);
  }
});

/*router.post("/board/:id/newlist", async (req, res) => {
  //chage to list
  try {
    const id = req.params.id; //boardId

    let body = req.body;
    let listName = body.listName;

    let list = await List.create({ name: listName, boardId: id });

    res.json(list);
  } catch (e) {
    next(e);
  }
});
//curl -H 'Content-Type: application/json' -d '{"listName":"xyz"}' http://localhost:3000/api/board/1/newlist

// ----------------------------------------
// Create Cards
// ----------------------------------------
router.post("/list/:id/newcard", async (req, res) => {
  //chage to cards
  try {
    const id = req.params.id; //listId

    let body = req.body;
    let cardName = body.cardName;
    let cardBody = body.cardBody;

    let card = await Card.create({
      name: cardName,
      listId: id,
      body: cardBody
    });

    res.json(card);
  } catch (e) {
    next(e);
  }
});*/