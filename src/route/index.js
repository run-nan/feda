const express = require('express');
const multer = require('multer');

const getAllAppInfo = require('../middlewares/get-all-app-info-handler');
const deployApp = require('../middlewares/deploy-app-handler');
const undeployApp = require('../middlewares/undeploy-app-handler');
const errorHandler = require('../middlewares/error-handler');
const logger = require('../middlewares/logger-handler');

const router = express.Router();
const upload = multer({ dest: 'temp' });

const PREFIX = '/rest/feda/v1';

router.use(logger);

router.route(`${PREFIX}/apps/:appName`)
    .post(upload.single('package'), deployApp)
    .delete(undeployApp);

router.get(`${PREFIX}/apps`, getAllAppInfo);

router.use(errorHandler);

module.exports = router;
