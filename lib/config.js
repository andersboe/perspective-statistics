var validation = require("perspective-core").validation;

module.exports = function(env) {
    var statisticsConfig = {
        url: env.STATISTICS_URL,
        eventsUrl: env.EVENTS_URL  
    };

    var statisticsConfigValidationRules = {
        url: {
            required: true
        },
        eventsUrl: {
            required: true
        }
    };

    var  statisticsValidationErrors = validation(statisticsConfig, statisticsConfigValidationRules);

    if (statisticsValidationErrors) {
        console.error("Missing statistics config");
        console.error(statisticsValidationErrors);
        process.exit(1);
    }

    return statisticsConfig;
}