"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var node_postgres_1 = require("drizzle-orm/node-postgres");
// You can specify any property from the node-postgres connection options
var db = (0, node_postgres_1.drizzle)({
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
});
exports.default = db;
