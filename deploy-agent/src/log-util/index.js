const log4js = require('log4js');
const path = require('path');
const LOG_ROOT = require('../env').LOG_ROOT;

class LogUtil {
    static init () {
        log4js.configure({
            appenders: {
                console: { // console日志
                    type: 'console'
                },
                request: { // 请求日志
                    type: 'file',
                    maxLogSize: 2048 * 1024, // 2MB
                    filename: path.join(LOG_ROOT, 'request.log')

                },
                running: { // 运行日志
                    type: 'file',
                    maxLogSize: 2048 * 1024, // 2MB
                    filename: path.join(LOG_ROOT, 'running.log')
                }
            },
            categories: {
                default: {
                    appenders: ['console'],
                    level: 'all'
                },
                request: {
                    appenders: ['request'],
                    level: 'INFO'
                },
                running: {
                    appenders: ['running'],
                    level: 'WARN'
                }
            }
        });
    }
}

LogUtil.reqLogger = log4js.getLogger('request');
LogUtil.runningLogger = log4js.getLogger('running');

module.exports = LogUtil;
