const dbConnection = require("./src/config/db");

const healthRouter = require("./meta/essential/healthRouter");

module.exports = {
  dbConnection,
  healthRouter,
};
