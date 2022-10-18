exports.home = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'Home', 
      }
    );
  }

  exports.projects = function(req, res, next) {
    res.render(
      'Projects', 
      { 
        title: 'Projects',
      }
    );
  }

  exports.services = function(req, res, next) {
    res.render(
      'Services', 
      { 
        title: 'Services',
      }
    );
  }

  exports.about = function(req, res, next) {
    res.render(
      'Aboutme', 
      { 
        title: 'Aboutme',
       
      }
    );
  }

  exports.contact = function(req, res, next) {
    res.render(
      'Contact', 
      { 
        title: 'Contact',
        
      }
    );
  }

