var express = require('express');
const Task = require('../models/Task');
var router = express.Router();

/* GET specific post. */
router.get('/:id', async (req, res) => {
  try {
    const item = await Task.findById(req.params.id);
    res.render('post', { item });
  } catch (e) {
    res.render(e.message);
  }
});

/* Delete post. */
router.post('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = router;
