var dbConnection = require("./src/config/db");

var healthRouter = require("./src/essential/healthRouter");

module.exports = {
  dbConnection,
  healthRouter,
};
