var validation = require("perspective-core").validation;

module.exports = function(env) {

    var statisticsConfig = {

    };

    var statisticsConfigValidationRules = {
        username: {
            required: true
        },
        password: {},
        url: {
            required: true
        }
    }

    var  statisticsValidationErrors = validation(statisticsConfig, statisticsConfigValidationRules);

    if (statisticsValidationErrors) {
        console.error("Missing statistics config");
        console.error(statisticsValidationErrors);
        process.exit(1);
    }

    return statisticsConfig;
}