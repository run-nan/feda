const fs = require('fs');
const util = require('util');
const ENV = require('../env');

const readDir = util.promisify(fs.readdir);

module.exports = async (req, res, next) => {
    try {
        if (!fs.existsSync(ENV.ASSETS_PATH)) {
            fs.mkdirSync(ENV.ASSETS_PATH, {mode: ENV.FILE_PRIVILEGE});
        }
        const files = await readDir(ENV.ASSETS_PATH);
        res.json({
            success: true,
            data: files
        });
    } catch (error) {
        next(error);
    }
};
