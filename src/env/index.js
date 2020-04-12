const path = require('path');

const ENV = {
    LOG_ROOT: process.env.LOG_ROOT || path.join(__dirname, '../../log'), // 日志文件父路径
    PRIVATE_KEY: process.env.PRIVATE_KEY || path.join(__dirname, '../ssl/private-key.pem'), // 私钥文件路径
    CERT: process.env.CERT || path.join(__dirname, '../ssl/cert.pem') // 证书文件
};

module.exports = ENV;
