var resourceErrorsFactory = require('perspective-core-rest').error.factory;
var request = require('request');

module.exports = function(webSocketServer, restServer, config) {

  var wsChannel = webSocketServer("statistics");
  var initialized = false;

  setInterval(function() {
   console.log("Sender data...");
   wsChannel.send("jobs_changed", {number: "10"});
 }, 5000);


};