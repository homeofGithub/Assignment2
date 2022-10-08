// Student ID: 300952167
// Name: Yi Chen
// Data: Oct 07, 2022
// File Name: index.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Home', 
      
    }
  );
});

// Renders the projects page
router.get('/projects', function(req, res, next) {
  res.render(
    'Projects', 
    { 
      title: 'Projects',
    }
  );
});

router.get('/services', function(req, res, next) {
  res.render(
    'Services', 
    { 
      title: 'Services',
    }
  );
});

router.get('/about', function(req, res, next) {
  res.render(
    'Aboutme', 
    { 
      title: 'Aboutme',
     
    }
  );
});

router.get('/contact', function(req, res, next) {
  res.render(
    'Contact', 
    { 
      title: 'Contact',
      
    }
  );
});

module.exports = router;