const { Router } = require('express');
const Post = require('../models/Tweet');
const { ensureAuth } = require('../middleware/ensureAuth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const {
      photoUrl,
      caption,
      tags
    } = req.body;

    Post.create({
      photoUrl,
      caption,
      tags,
      user: req.user._id
    })
      .then(post => res.send(post))
      .catch(next);
  });


