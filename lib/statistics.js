var StatisticsService = require('./statistics-service');
var statisticsResource = require('./statistics-resource');

var coreRest = require('perspective-core-rest');
var coreWebSocket = require('perspective-core-web-socket');

var produceStatisticsConfig = require('./config');

module.exports = function(env) {
	var config = produceStatisticsConfig(env);

	var serverConfig = coreRest.produceConfig(env);
	var restServer = coreRest.createServer(serverConfig);
	var webSocketServer = coreWebSocket.createServer(restServer.server, serverConfig);

	new statisticsResource(webSocketServer, restServer, config);
};