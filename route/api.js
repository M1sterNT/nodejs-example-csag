const express = require('express')
const api = express.Router();
const GetName = require('./../controllers/getname.controller')
const PostName = require('./../controllers/postname.controller')

api.get('/users/:name', GetName);
api.post('/users/name', PostName);

module.exports = api;
