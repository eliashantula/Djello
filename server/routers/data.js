var express = require("express");
var router = express.Router();
var models = require("./../models");
var { User, Board, List } = models;
var sequelize = models.sequelize;

router.get("/users", function(req, res, next) {
  User.findAll({})
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get("/users/:id", function(req, res, next) {
  User.findOne({
    where: { id: req.params.id }
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get("/boards", function(req, res, next) {
  Board.findAll({})
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get("/board/:id", function(req, res, next) {
  let id = req.params.id;


  Board.findById(id, {
    include: [{ model: List }, { model: User }]
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

/*router.get("/userboards/:id", function(req, res, next) {
  Board.findAll({
    where: { userId: req.params.id }
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});*/

/*router.post("/usernew", (req, res) => {
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
});*/

router.delete("/board/delete/:id", (req, res) => {
  Board.destroy({
    where: { id: req.params.id },
    limit: 1
  }).then(() => {
    Board.findAll({})
      .then(result => {
        res.status(200).send(result);
      })
      .catch(e => res.status(500).send(e.stack));
  });
});

router.delete("/list/delete/:id", (req, res) => {
  console.log(req.params)
  List.findOne({
    where: { id: req.params.id },
    limit: 1
  })
  /*List.destroy({
    where: { id: req.params.id },
    limit: 1 
  })*/.then((list) => {
    let thisId = list.boardId
    List.destroy({
    where: { id: req.params.id }
  }).then(()=>{
    Board.findById(thisId, {
    include: [{ model: List }, { model: User }]
    })
      .then(result => {
        console.log(result)
        res.status(200).send(result);
      })
      .catch(e => res.status(500).send(e.stack));
  });
})
});

router.post(["/board/newboard", "/newboard"], async (req, res) => {
  try {
    var titles = req.body.title;
    var id = parseInt(req.body.username);
    let board = await Board.create({ title: titles, userId: id });
    let boardfull = await Board.findById(id, {
      include: [{ model: List }, { model: User }]
    });
    
    res.status(200).send(board);
  } catch (e) {
    next(e);
  }
});
router.post(["/newlist"], async (req, res) => {
  try {
    console.log(req.body);
    var titles = req.body.title;
    var boardid = parseInt(req.body.boardId);
    let list = await List.create({ title: titles, boardId: boardid });

    res.status(200).send(list);
  } catch (e) {
    next(e);
  }
});


router.post(["/newcard"], async (req, res) => {
  try {
    console.log(req.body);
    var title = req.body.title;
    var description = req.body.description
    var listid = parseInt(req.body.listId);
    var completed = req.body.completed
    let card = await Cards.create({ title: title, listId: listid, completed: completed, description: description });

    res.status(200).send(list);
  } catch (e) {
    next(e);
  }
});



router.put("/list/put/:id", (req, res) => {
  console.log(req.params.id)
console.log(req.body)
  List.findOne({
    where: { id: req.params.id },
    limit: 1
  }).then((list) => {
    console.log(list)
    list.updateAttributes({title:req.body.title})
      .then(result => {
        res.status(200).send(result);
      })
      .catch(e => res.status(500).send(e.stack));
  });
});

module.exports = router;
