const express = require('express');
const PostRoutes = express.Router();

let Posts = require('../models/Model');


PostRoutes.route('/add').post(function (req, res) {
  let posts = new Posts(req.body);
  posts.save()
    .then(posts => {
      res.status(200).json({'posts': 'post add'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


PostRoutes.route('/').get(function (req, res) {
    Posts.find(function(err, postes){
    if(err){
      console.log(err);
    }
    else {
      res.json(postes);
    }
  });
});


PostRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Posts.findById(id, function (err, posts){
      res.json(posts);
  });
});


PostRoutes.route('/update/:id').post(function (req, res) {
    Posts.findById(req.params.id, function(err, posts) {
    if (!posts)
      res.status(404).send("data is not found");
    else {
        posts.title_name = req.body.title_name;
        posts.text_name = req.body.text_name;

        posts.save().then(posts => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


PostRoutes.route('/delete/:id').get(function (req, res) {
    Posts.findByIdAndRemove({_id: req.params.id}, function(err, posts){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = PostRoutes;