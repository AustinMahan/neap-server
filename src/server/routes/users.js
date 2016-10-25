const express = require('express');
const router = express.Router();
const {addUser, getWhere, makeToken, getAll, comparePass, ensureAuthenticated} = require('../queries/coffees');
const local = require('../auth/local.js');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  getAll('users')
  .then(data => res.send(data))
})

router.get('/status', ensureAuthenticated, (req, res, next) => {
  res.json({
    status: 'A ok'
  })
})

router.post('/login', function (req, res, next) {
  const username = req.body.username
  const password = req.body.password

  getWhere('users', 'username', username)
  .then(response => {
    comparePass(password, response[0].password);      // compare pass with bcrypt
    return response[0];
  })
  .then(local.encodeToken)
  .then(token => {
    res.status(200).json({
      status: 'success',
      token: token
    });
  })
  .catch(err => {
    res.status(500).json({
      status: 'error'
    });
  })
})

router.post('/register', function (req, res, next) {
  var user = req.body
  addUser(req.body)
  .then(makeToken)
  .then((token) => {
    res.send({status: 'success', token: token})
  })
  .catch(err => res.status(500).send(err))
});

module.exports = router;
