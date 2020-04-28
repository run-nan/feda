const compressing = require('compressing');
const fs = require('fs');
const path = require('path');
const util = require('util');
const ENV = require('../env');

const unlink = util.promisify(fs.unlink);

module.exports = async (req, res, next) => {
    try {
        if (!fs.existsSync(ENV.ASSETS_PATH)) {
            fs.mkdirSync(ENV.ASSETS_PATH);
        }
        const appAssetsRoot = path.join(ENV.ASSETS_PATH, `./${req.params.appName}`);
        if (!fs.existsSync(appAssetsRoot)) {
            fs.mkdirSync(appAssetsRoot);
        }
        await compressing.zip.uncompress(req.file.path, appAssetsRoot);
        await unlink(req.file.path);
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        // next(error);
    }
};
