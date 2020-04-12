const express = require('express');
const getAppInfo = require('../middlewares/get-app-info-handler');
const addApp = require('../middlewares/add-app-handler');
const deleteApp = require('../middlewares/delete-app-handler');
const errorHandler = require('../middlewares/error-handler-handler');
const logger = require('../middlewares/logger-handler');

const router = express.Router();

const URL = '/rest/feda/v1/apps/:appName/:appVersion';

router.use(logger);

router.route(URL)
    .get(getAppInfo)
    .post(addApp)
    .delete(deleteApp);

router.use(errorHandler);

module.exports = router;
