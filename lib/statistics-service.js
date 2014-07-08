var Q = require('q');
var _ = require('underscore');

var StatisticsService = function(statisticsRepository) {
	this.repository = statisticsRepository;
};

StatisticsService.prototype = {
	updateNumber: function(interval, updateNumberCallback) {
		var service = this;
		var job_registry = {};

		var doneCallback = function(number) {
			updateNumberCallback(number);
		};
	}
};

module.exports = StatisticsService;