const logger = require('../log-util').reqLogger;

module.exports = (req, res, next) => {
    const beginning = new Date().getTime();
    next();
    const end = new Date().getTime();
    const duration = end - beginning;
    const statusCode = res.statusCode;
    const loggerInfo = `${req.ip} ${req.method} ${req.originalUrl} ${statusCode} --- ${duration}ms`;
    if (statusCode < 400) {
        logger.info(loggerInfo);
    } else {
        logger.error(loggerInfo);
    }
};
