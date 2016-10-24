const express = require('express');
const router = express.Router();

const { getAll, getWhere, addOne } = require('../queries/coffees');
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

router.post('/', function (req, res, next) {
  console.log('hit');
  addOne(req.body)
  .then((data) => { console.log('end'); res.status(201).send(data)})
})

module.exports = router;
