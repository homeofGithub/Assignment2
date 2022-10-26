// Student ID: 300952167
// Name: Yi Chen
// Data: Oct 07, 2022
// File Name: index.js

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');


/* GET home page. */
router.get('/', indexController.home );

// Renders the projects page
router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/about', indexController.about);

router.get('/contact', indexController.contact);

router.get('/User', indexController.contact);



module.exports = router;