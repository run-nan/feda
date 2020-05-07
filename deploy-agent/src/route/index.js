const express = require('express');
const multer = require('multer');

const getAllAppInfo = require('../middlewares/get-all-app-info-handler');
const deployApp = require('../middlewares/deploy-app-handler');
const errorHandler = require('../middlewares/error-handler');
const logger = require('../middlewares/logger-handler');
const ENV = require('../env');

const router = express.Router();
const upload = multer({ dest: ENV.PACKAGE_PATH });

const PREFIX = '/rest/feda/v1';

router.use(logger);

router.post(`${PREFIX}/apps/:appName`, upload.single('package'), deployApp);

router.get(`${PREFIX}/apps`, getAllAppInfo);

router.use(errorHandler);

module.exports = router;
