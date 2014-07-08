var resourceErrorsFactory = require('perspective-core-rest').error.factory;
var request = require('request');

module.exports = function(webSocketServer, restServer, config) {

  var wsChannel = webSocketServer("statistics");
  var initialized = false;

  setInterval(function() {
   console.log("Sender data...");
   wsChannel.send("jobs_changed", {number: 10});

   if(!initialized) {
    initialized = true
  } else {
    notifyChangedJobs(changedJobs);
  }
}, 5000);

function notifyChangedJobs() {
 
      var notification = {
        number: 10
      };

      request({
        url: config.eventsUrl + '/events',
        method: 'POST',
        body: notification,
        json: true
      }, function(error, httpResponse, body) {
        if(error) {
          console.log(error);
        }
      });

  }

  restServer.route('get', '/statistics', function(req, res, next) {

    var respond = function(tasks) {
      res.send(200, tasks);
      next();
    };

    service.jobs().
        then(respond).
        fail(resourceErrorsFactory);

  });
};