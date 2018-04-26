import "./init-config";

const moment = require("moment");

const b = "bzzz";

console.dir(moment(global.config.startUpTime).fromNow());
