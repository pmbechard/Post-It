var express = require('express');
const Task = require('../models/Task');
var router = express.Router();

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/* GET home page. */
router.get('/', async (req, res, next) => {
  const tasks = await Task.find();
  res.render('index', { day: days[new Date().getDay()], tasks });
});

module.exports = router;
