// ./config/env/production/database.js

const parse = require("pg-connection-string").parse; // If using PostgreSQL
const { KICKBOX_API_KEY, KICKBOX_API_MODE } = process.env;

module.exports = ({ env }) => {
    // // For PostgreSQL:
    // const config = parse(env('DATABASE_URL'));
    // return {
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       host: config.host,
    //       port: config.port,
    //       database: config.database,
    //       user: config.user,
    //       password: config.password,
    //       ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false, // Adjust SSL based on your host's requirements
    //     },
    //     debug: false,
    //   },
    // }

    // For MySQL:
    return {
        connection: {
            client: "mysql",
            connection: {
                host: env("DATABASE_HOST", "127.0.0.1"), // Placeholder - we'll set this in cPanel
                port: env.int("DATABASE_PORT", 3306), // Placeholder
                database: env("DATABASE_NAME", "strapi"), // Placeholder
                user: env("DATABASE_USERNAME", "strapi"), // Placeholder
                password: env("DATABASE_PASSWORD", ""), // Placeholder
                ssl: env.bool("DATABASE_SSL", false), // Usually false for cPanel MySQL on localhost
            },
            debug: false,
        },
    };
};
