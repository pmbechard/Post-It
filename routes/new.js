var express = require('express');
const Task = require('../models/Task');
var router = express.Router();

/* GET new post form. */
router.get('/', (req, res) => {
  res.render('new');
});

/* POST new post info. */
router.post('/', async (req, res) => {
  const newPost = {
    task: req.body.task,
    author: req.body.author,
  };
  try {
    await Task.create(newPost);
    res.redirect('/');
  } catch (e) {
    res.send(e.message);
  }
});

/* GET Specific post. */
router.get('/:id', (req, res) => {
  res.render('new');
});

module.exports = router;
