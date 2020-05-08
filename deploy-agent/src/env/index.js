const path = require('path');

const ENV = {
    LOG_ROOT: process.env.LOG_ROOT || path.join(__dirname, '../../log'), // 日志文件父路径
    PRIVATE_KEY: process.env.PRIVATE_KEY || path.join(__dirname, '../../ssl/private-key.pem'), // 私钥文件路径
    CERT: process.env.CERT || path.join(__dirname, '../../ssl/cert.pem'), // 证书文件
    ASSETS_PATH: process.env.ASSETS_PATH || path.join(__dirname, '../../feda-assets'), // 要伺服的静态文件根路径
    PACKAGE_PATH: path.join(__dirname, '../../.temp') // 上传的zip包的暂存目录
};

module.exports = ENV;
