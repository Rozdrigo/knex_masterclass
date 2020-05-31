const express = require('express');
const knex = require('./database')

const routes = express.Router();

const UserController = require('./controllers/UserController')
const projectController = require('./controllers/ProjectController')

routes
  //users
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)
  //projects
  .get('/projects', projectController.index)
  .post('/projects/:user_id', projectController.create);


module.exports = routes;