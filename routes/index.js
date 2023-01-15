const routes = require('express').Router();
const nameController = require('./../controllers/nameController.js');

routes.get("/", nameController.sendName);

module.exports = routes;