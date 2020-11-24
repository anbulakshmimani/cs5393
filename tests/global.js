var perf = require('execution-time')();

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "info";

var log = require('simple-node-logger').createSimpleFileLogger('project.log');
log.setLevel('info');

exports.log = log;
exports.logger = logger;
exports.perf = perf;