const os = require('os');
const cluster = require('cluster');
const https = require('https');
const fs = require('fs');
const express = require('express');

const LogUtil = require('./log-util');
const router = require('./route');
const ENV = require('./env');

if (cluster.isMaster) {
    LogUtil.init();
    const logger = LogUtil.runningLogger;
    logger.mark(`Master[${process.pid}] is online`);

    const maxProcessNum = os.cpus().length;
    for (let i = 0; i < maxProcessNum; i++) {
        cluster.fork();
    }

    // 子进程启动时打印日志
    cluster.on('online', (worker) => {
        logger.mark(`Worker[${worker.process.pid}] is online`);
    });

    // 子进程退出时，主进程重新启动一个子进程
    cluster.on('exit', (worker, code, signal) => {
        logger.error(`Worker[${worker.process.pid}] died with code: ${code} and signal: ${signal}`);
        logger.mark('Start a new worker');
        cluster.fork();
    });
} else {
    LogUtil.init();
    const app = new express(); // eslint-disable-line
    app.use('/', router);
    const key = fs.readFileSync(ENV.PRIVATE_KEY);
    const cert = fs.readFileSync(ENV.CERT);
    const options = {
        key,
        cert
    };
    https.createServer(options, app).listen(3000);
}
