const express = require('express');
const router = express.Router();

const { getAll, getWhere } = require('../queries/coffees');
const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  getAll('coffeee')
  .then(data => res.send(data))
  .catch(err => res.status(500).send(err))
});

router.get('/:id', function (req, res, next) {
  getWhere('coffeee', 'id', req.params.id)
  .then(data => res.send(data))
  .catch(err => res.status(500).send(err))
});

module.exports = router;
