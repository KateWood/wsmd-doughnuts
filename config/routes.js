var express = require('express');
var router = express.Router();

var gamesController = require('../controllers/games');
var doughnutsController = require('../controllers/doughnuts');
var usersCtrl = require('../controllers/users');

// Require token authentication.
var token = require('../config/token_auth');

/* GET home page. */
// This is where I will document my RESTful API
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// API routes
router.route('/api/games')
  // GET all games
  .get(gamesController.index)
  .post(gamesController.create);

router.route('/api/games/:id')
  .get(gamesController.show)
  .patch(gamesController.update)
  .delete(gamesController.destroy);

router.route('/api/doughnuts')
  .get(doughnutsController.index)
  .post(doughnutsController.create);

router.route('/api/doughnuts/:id')
  .get(doughnutsController.show)
  .patch(doughnutsController.update)
  .delete(doughnutsController.destroy);

router.route('/api/users')
  .post(usersCtrl.create);

router.route('/api/users/me')
  .get(token.authenticate, usersCtrl.me);

router.route('/api/token')
  .post(token.create);


module.exports = router;
