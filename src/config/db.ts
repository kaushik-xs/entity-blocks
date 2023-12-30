enum DB_TYPE_ENUM {
  MONGODB = "mongodb",
  POSTGRESQL = "postgresql",
}

// Required libraries
var mongoose = require("mongoose");
var { Pool } = require("pg"); // PostgreSQL client

// Environment variables
let dbType = process.env.DB_TYPE || DB_TYPE_ENUM.MONGODB;
var dbURI = process.env.DB_CONNECTION_URL;

var dbConnection: any;

if (DB_TYPE_ENUM.MONGODB === dbType) {
  // MongoDB connection
  mongoose.connect(dbURI);

  dbConnection = mongoose.connection;

  dbConnection.on("connected", function () {
    console.log("Mongoose default connection open");
  });

  dbConnection.on("error", function (err: any) {
    console.log("Mongoose default connection error: " + err);
  });

  dbConnection.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
  });
} else if (DB_TYPE_ENUM.POSTGRESQL === dbType) {
  // PostgreSQL connection
  const pool = new Pool({
    connectionString: dbURI,
  });

  dbConnection = pool;

  pool.on("connect", () => {
    console.log("PostgreSQL default connection open");
  });

  pool.on("error", (err: any) => {
    console.log("PostgreSQL default connection error: " + err);
  });

  pool.on("remove", () => {
    console.log("PostgreSQL default connection disconnected");
  });
}

// If the Node process ends, close the database connection
process.on("SIGINT", function () {
  if (DB_TYPE_ENUM.MONGODB === dbType) {
    dbConnection.close();
  } else if (DB_TYPE_ENUM.POSTGRESQL === dbType) {
    dbConnection.end();
  }
  process.exit(0);
});

export default dbConnection;
