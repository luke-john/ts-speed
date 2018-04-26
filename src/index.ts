import "./init-config";

const moment = require("moment");

console.dir(moment(global.config.startUpTime).fromNow());
