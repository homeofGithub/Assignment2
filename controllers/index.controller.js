exports.home = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'Home', 
        userName: req.user ? req.user.username : ''
      }
    );
  }

  exports.projects = function(req, res, next) {
    res.render(
      'Projects', 
      { 
        title: 'Projects',
        userName: req.user ? req.user.username : ''
      }
    );
  }

  exports.services = function(req, res, next) {
    res.render(
      'Services', 
      { 
        title: 'Services',
        userName: req.user ? req.user.username : ''
      }
    );
  }

  exports.about = function(req, res, next) {
    res.render(
      'Aboutme', 
      { 
        title: 'Aboutme',
        userName: req.user ? req.user.username : ''
       
      }
    );
  }

  exports.contact = function(req, res, next) {
    res.render(
      'Contact', 
      { 
        title: 'Contact',
        userName: req.user ? req.user.username : ''
        
      }
    );
  }

