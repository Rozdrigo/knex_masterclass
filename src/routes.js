const express = require('express');
const knex = require('./database')

const routes = express.Router();

const UserController = require('./controllers/UserController')

routes.get('/users', UserController.index);

module.exports = routes;