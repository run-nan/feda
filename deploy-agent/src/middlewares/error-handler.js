const logger = require('../log-util').runningLogger;

module.exports = (err, req, res, next) => { //eslint-disable-line
    logger.error('unexpected error:' + `\n${err.stack}`);
    res.status(500).json({
        success: false,
        message: 'There is an unexpected error on the server'
    });
};
