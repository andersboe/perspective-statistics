var validation = require("perspective-core").validation;

module.exports = function(env) {
    var statisticsConfig = {
        url: env.STATISTICS_URL
    };

    var statisticsConfigValidationRules = {
        url: {
            required: false
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