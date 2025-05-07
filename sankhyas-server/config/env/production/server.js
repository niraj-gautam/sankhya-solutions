// ./config/env/production/server.js
module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"), // Listens on all available interfaces
    port: env.int("PORT", 1337), // Default Strapi port, cPanel might override this
    url: env("PUBLIC_URL", "https://siprnepal.org/"), // IMPORTANT: Set this to your actual live domain/subdomain later!
    app: {
        keys: env.array("APP_KEYS"), // Will be set in cPanel environment variables
    },
    webhooks: {
        populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
});
