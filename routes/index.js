// Student ID: 1234568796
// Name: Julio Vinicius
// Data: Oct 01, 2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Home', 
      name: 'Julio' 
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
      name: 'Julio' 
    }
  );
});

router.get('/contact', function(req, res, next) {
  res.render(
    'Contact', 
    { 
      title: 'Contact',
      name: 'Julio' 
    }
  );
});

module.exports = router;