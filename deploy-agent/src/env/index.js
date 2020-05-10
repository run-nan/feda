const path = require('path');

const ENV = {
    LOG_ROOT: path.join(__dirname, '../../.workspace/logs'), // 日志文件父路径
    PRIVATE_KEY: path.join(__dirname, '../../ssl/private-key.pem'), // 私钥文件路径
    CERT: path.join(__dirname, '../../ssl/cert.pem'), // 证书文件
    ASSETS_PATH: path.join(__dirname, '../../.workspace/feda-assets'), // 要伺服的静态文件根路径
    PACKAGE_PATH: path.join(__dirname, '../../.workspace/.temp'), // 上传的zip包的暂存目录
    FILE_PRIVILEGE: 777 // 创建的文件的读写权限
};

module.exports = ENV;
