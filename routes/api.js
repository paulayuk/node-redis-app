const express = require('express');
const Route   = express();
const posts   = require('../app/Http/controllers/postsController');

//homepage
Route.get('/', (req, res, next) => {
  res.send('Welcome to the BlogPost API built with node and redis')
})

// get all posts
Route.get('/posts', posts.getAllPosts);

// add a new post
Route.post('/post/create', posts.createPost);

// delete a post
Route.delete('/post/delete/:id', posts.deletePost);

// get a post by id
Route.get('/post/:id', posts.getPost);

// update a post by id
Route.put('/post/update/:id', posts.updatePost);


module.exports = Route