const compressing = require('compressing');
const fs = require('fs');
const path = require('path');
const util = require('util');
const ENV = require('../env');

const unlink = util.promisify(fs.unlink);

module.exports = async (req, res, next) => {
    try {
        if (!fs.existsSync(ENV.ASSETS_PATH)) {
            fs.mkdirSync(ENV.ASSETS_PATH, {mode: ENV.FILE_PRIVILEGE});
        }
        const appAssetsRoot = path.join(ENV.ASSETS_PATH, `./${req.params.appName}`);
        if (fs.existsSync(appAssetsRoot)) {
            res.json({
                success: false,
                message: `Failed to deploy ${req.params.appName} because an app with the same name does exists`
            });
        } else {
            fs.mkdirSync(appAssetsRoot, {mode: ENV.FILE_PRIVILEGE});
            await compressing.zip.uncompress(req.file.path, appAssetsRoot);
            await unlink(req.file.path);
            res.json({
                success: true
            });
        }
    } catch (error) {
        next(error);
    }
};
